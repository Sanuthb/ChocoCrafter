import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, getTotalCost } from "../Redux/Slice/orderSlice";
import { message } from "antd";
import { url } from "../utils/url";

// Stripe public key
const stripePromise = loadStripe("pk_test_51R6Kj6KomPn9UsXDNyAfzi4slafPgtLi5UGid2AoJb4CTH9aiu10ZQnkrUrPLSaK1QrsFm8l3f3kS2Sv1WYBSCqs00aoWmg42T");

const priceMap = {
  milk: 50, dark50: 55, dark70: 60, dark85: 65, white: 50, ruby: 70,
  sugarFree: 60, vegan: 65,
  Mint: 8, Caramel: 10, Strawberry: 10, Lemon: 9, Coconut: 11,
  Vanilla: 10, Orange: 9, Hazelnut: 12, Coffee: 10, Blueberry: 12,
  Almond: 30, Cashew: 25, Walnut: 20, Pistachio: 30,
  caramelFilling: 12, strawberryJam: 10, raspberryJam: 10,
  blueberryJam: 12, milkGanache: 15, darkGanache: 15, whiteGanache: 15,
  seaSaltCaramel: 14, roseFlowers: 16, lavenderFlowers: 16,
  cookieCrumbs: 10, honeyDrizzleFilling: 12,
  crushedNuts: 10, cookiePieces: 12, sprinkles: 8, chocolateChips: 15,
  strawberryFruits: 18, blueberryFruits: 18, mangoFruits: 20,
  cranberryFruits: 20, honeyDrizzleTopping: 12, orangePeel: 14,
  candyBits: 10,
  regularBar: 10, miniBar: 15, largeBar: 15, roundTruffles: 10,
  heartTruffles: 10, starTruffles: 10, customTruffles: 10,
  chocolateDiscs: 10, birthdayMold: 10, anniversaryMold: 10,
  corporateLogo: 10, textEngraving: 10,
  glutenFree: 10, nutFree: 5, lactoseFree: 10,
  ecoFriendly: 0, luxuryBox: 25, tin: 15,
  message: 10, occasionTag: 15, giftCard: 30,
};

const getPriceForItem = (product) => {
  let total = 0;
  Object.entries(product).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        total += priceMap[item] || 0;
      });
    } else {
      total += priceMap[value] || 0;
    }
  });
  return total;
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.order.cart);
  const total = useSelector(getTotalCost);
  const { user } = useSelector((state) => state.auth);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    try {
      // Step 1: Create Payment Intent
      const res = await fetch(`${url}/api/v1/payments/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customerId: user._id, amount: total }),
      });

      const data = await res.json();
      const clientSecret = data.clientSecret;

      // Step 2: Confirm Card Payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        message.error(error.message);
        setIsProcessing(false);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        // Step 3: Prepare chocolate order data
        const chocolatesForOrder = cart.map(item => ({
          name: item.chocolateBase,
          ingredients: [
            ...(item.flavorInfusion || []),
            ...(item.fillings || []),
            ...(item.toppings || []),
          ],
          customization: {
            shapeDesign: item.shapeDesign,
            dietaryPreferences: item.dietaryPreferences,
            packaging: item.packaging,
            addOnExtras: item.addOnExtras,
          },
          quantity: 1,
          price: getPriceForItem(item),
        }));

        // Step 4: Store order
        const orderRes = await fetch(`${url}/api/v1/order/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
            chocolates: chocolatesForOrder,
            totalAmount: total,
            paymentStatus: "Paid",
            orderStatus: "Processing",
          }),
        });

        if (orderRes.ok) {
          setIsSuccess(true);
          dispatch(clearCart());
          message.success("Order placed successfully!");
          setTimeout(() => navigate("/"), 2000);
        } else {
          message.error("Failed to store order");
        }
      }

      setIsProcessing(false);
    } catch (err) {
      console.error(err);
      message.error("Something went wrong");
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {isSuccess ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
          <p>Redirecting to home...</p>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4 text-center">Checkout</h2>
          <form onSubmit={handlePayment}>
            <div className="border p-4 rounded mb-4">
              <CardElement />
            </div>
            <button
              type="submit"
              className={`w-full py-2 text-white rounded ${
                isProcessing ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
              }`}
              disabled={!stripe || isProcessing}
            >
              {isProcessing ? "Processing..." : `Pay ₹${total}`}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentForm;

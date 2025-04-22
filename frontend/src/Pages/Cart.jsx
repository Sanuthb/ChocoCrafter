import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  getTotalCost,
  removeItemFromCart,
  clearCart,
} from "../Redux/Slice/orderSlice";
import { Button, Card, List, Popconfirm, message, Divider, Tag } from "antd";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector(selectCart);
  const totalCost = useSelector(getTotalCost);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeItemFromCart(index));
    message.info(`Item #${index + 1} removed from cart`);
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    message.error("Cart cleared");
  };

  const renderTagList = (list) => {
    return list.length > 0
      ? list.map((item) => <Tag key={item}>{item}</Tag>)
      : "None";
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen px-6 py-10 bg-[#f6f9fa]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
            🛒 Your Chocolate Cart
          </h1>

          {cart.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              Your cart is empty.
            </div>
          ) : (
            <>
              <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={cart}
                renderItem={(item, index) => (
                  <List.Item>
                    <Card
                      title={
                        <span className="text-lg font-semibold text-[#444]">
                          🍫 Custom Chocolate #{index + 1}
                        </span>
                      }
                      bordered
                      style={{ borderRadius: "10px", borderColor: "#e0e0e0" }}
                      extra={
                        <Popconfirm
                          title="Remove this item?"
                          onConfirm={() => handleRemove(index)}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Button danger size="small">
                            Remove
                          </Button>
                        </Popconfirm>
                      }
                    >
                      <p>
                        <strong>Base:</strong>{" "}
                        {item.chocolateBase || (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </p>
                      <p>
                        <strong>Flavor Infusion:</strong>{" "}
                        {renderTagList(item.flavorInfusion)}
                      </p>
                      <p>
                        <strong>Fillings:</strong>{" "}
                        {renderTagList(item.fillings)}
                      </p>
                      <p>
                        <strong>Toppings:</strong>{" "}
                        {renderTagList(item.toppings)}
                      </p>
                      <p>
                        <strong>Shape & Design:</strong>{" "}
                        {item.shapeDesign || (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </p>
                      <p>
                        <strong>Dietary Preferences:</strong>{" "}
                        {renderTagList(item.dietaryPreferences)}
                      </p>
                      <p>
                        <strong>Packaging:</strong>{" "}
                        {item.packaging || (
                          <span className="text-gray-400">N/A</span>
                        )}
                      </p>
                      <p>
                        <strong>Add-On Extras:</strong>{" "}
                        {renderTagList(item.addOnExtras)}
                      </p>
                    </Card>
                  </List.Item>
                )}
              />

              <Divider />

              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-2xl font-semibold text-[#444]">
                  🧾 Total: <span className="text-[#73c8bd]">₹{totalCost}</span>
                </h2>

                <div className="mt-4 sm:mt-0 flex gap-4">
                  <Popconfirm
                    title="Clear entire cart?"
                    onConfirm={handleClearCart}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button danger>Clear Cart</Button>
                  </Popconfirm>

                  <Link to="/payment">
                    <Button
                      type="primary"
                      style={{ background: "#fd85b2", borderColor: "#fd85b2" }}
                    >
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

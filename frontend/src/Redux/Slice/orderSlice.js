// redux/Slice/orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const priceMap = {
  // ... [all your prices — same as before]
  milk: 50, dark50: 55, dark70: 60, dark85: 65, white: 50, ruby: 70,
  sugarFree: 60, vegan: 65,
  Mint: 8, Caramel: 10, Strawberry: 10, Lemon: 9, Coconut: 11,
  Vanilla: 10, Orange: 9, Hazelnut: 12, Coffee: 10, Blueberry: 12,
  Almond: 30, Cashew: 25, Hazelnut: 20, Walnut: 20, Pistachio: 30,
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
  vegan: 10, glutenFree: 10, nutFree: 5, lactoseFree: 10,
  ecoFriendly: 0, luxuryBox: 25, tin: 15,
  message: 10, occasionTag: 15, giftCard: 30,
};

const initialProduct = {
  chocolateBase: null,
  flavorInfusion: [],
  fillings: [],
  toppings: [],
  shapeDesign: null,
  dietaryPreferences: [],
  packaging: null,
  addOnExtras: [],
};

const initialState = {
  currentProduct: { ...initialProduct },
  cart: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderOption: (state, action) => {
      const { key, value } = action.payload;
      if (!state.currentProduct) state.currentProduct = {};
      state.currentProduct[key] = value;
    },
    addToCart: (state) => {
      state.cart.push({ ...state.currentProduct });
      state.currentProduct = { ...initialProduct };
    },
    clearCart: (state) => {
      state.cart = [];
    },
    removeItemFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    resetCurrentProduct: (state) => {
      state.currentProduct = { ...initialProduct };
    },
  },
});

export const {
  setOrderOption,
  addToCart,
  clearCart,
  removeItemFromCart,
  resetCurrentProduct,
} = orderSlice.actions;

export const selectCurrentProduct = (state) => state.order.currentProduct;
export const selectCart = (state) => state.order.cart;

export const getTotalCost = (state) => {
  return state.order.cart.reduce((acc, product) => {
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
    return acc + total;
  }, 0);
};

export const getCurrentProductCost = (state) => {
  let total = 0;
  const product = state.order.currentProduct;

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

export default orderSlice.reducer;

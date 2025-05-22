import { createSlice } from "@reduxjs/toolkit";

// --- Price map for all product options ---
const priceMap = {
  // Chocolate bases
  milk: 50, dark50: 55, dark70: 60, dark85: 65, white: 50,
  ruby: 70, sugarFree: 60,

  // Flavor infusion
  mint: 8, caramel: 10, strawberry: 10, lemon: 9, coconut: 11,
  vanilla: 10, orange: 9, hazelnut: 12, coffee: 10, blueberry: 12,

  // Fillings
  almond: 30, cashew: 25, walnut: 20, pistachio: 30,
  caramelFilling: 12, strawberryJam: 10, raspberryJam: 10, blueberryJam: 12,
  milkGanache: 15, darkGanache: 15, whiteGanache: 15, seaSaltCaramel: 14,
  roseFlowers: 16, lavenderFlowers: 16, cookieCrumbs: 10, honeyDrizzleFilling: 12,

  // Toppings
  crushedNuts: 10, cookiePieces: 12, sprinkles: 8, chocolateChips: 15,
  strawberryFruits: 18, blueberryFruits: 18, mangoFruits: 20, cranberryFruits: 20,
  honeyDrizzleTopping: 12, orangePeel: 14, candyBits: 10,

  // Shape & design
  regularBar: 10, miniBar: 15, largeBar: 15,
  roundTruffles: 10, heartTruffles: 10, starTruffles: 10, customTruffles: 10,
  chocolateDiscs: 10, birthdayMold: 10, anniversaryMold: 10,
  corporateLogo: 10, textEngraving: 10,

  // Dietary preferences
  vegan: 10, glutenFree: 10, nutFree: 5, lactoseFree: 10, ecoFriendly: 0,

  // Packaging
  luxuryBox: 25, tin: 15,

  // Add-ons
  message: 10, occasionTag: 15, giftCard: 30,
};

// --- Initial product & state ---
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

// --- Slice ---
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderOption: (state, action) => {
      const { key, value } = action.payload;
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
      const index = action.payload;
      if (index >= 0 && index < state.cart.length) {
        state.cart.splice(index, 1);
      }
    },
    resetCurrentProduct: (state) => {
      state.currentProduct = { ...initialProduct };
    },
  },
});

// --- Selectors ---
export const {
  setOrderOption,
  addToCart,
  clearCart,
  removeItemFromCart,
  resetCurrentProduct,
} = orderSlice.actions;

export const selectCurrentProduct = (state) => state.order.currentProduct;
export const selectCart = (state) => state.order.cart;

// --- Cost Calculation ---
const keysToSum = [
  "chocolateBase",
  "flavorInfusion",
  "fillings",
  "toppings",
  "shapeDesign",
  "dietaryPreferences",
  "packaging",
  "addOnExtras",
];

export const getTotalCost = (state) =>
  state.order.cart.reduce((acc, product) => {
    let total = 0;
    keysToSum.forEach((key) => {
      const value = product[key];
      if (Array.isArray(value)) {
        value.forEach((item) => (total += priceMap[item] || 0));
      } else {
        total += priceMap[value] || 0;
      }
    });
    return acc + total;
  }, 0);

export const getCurrentProductCost = (state) => {
  const product = state.order.currentProduct;
  return keysToSum.reduce((total, key) => {
    const value = product[key];
    if (Array.isArray(value)) {
      value.forEach((item) => (total += priceMap[item] || 0));
    } else {
      total += priceMap[value] || 0;
    }
    return total;
  }, 0);
};

// --- Calories Calculation ---
export const getCurrentProductCalories = (state) => {
  const product = state.order.currentProduct;

  const chocolateBases = {
    milk: 535, dark50: 540, dark70: 598, dark85: 604,
    white: 539, ruby: 544, sugarFree: 480, vegan: 520,
  };

  const flavors = {
    mint: 2, caramel: 40, strawberry: 10, lemon: 8,
    coconut: 35, vanilla: 12, orange: 9, hazelnut: 63,
    coffee: 5, blueberry: 15,
  };

  const fillings = {
    almond: 50, cashew: 55, hazelnut: 60, walnut: 65, pistachio: 60,
    caramelFilling: 40, strawberryJam: 30, raspberryJam: 30, blueberryJam: 30,
    milkGanache: 70, darkGanache: 65, whiteGanache: 75,
    seaSaltCaramel: 40, roseFlowers: 5, lavenderFlowers: 5,
    cookieCrumbs: 50, honeyDrizzleFilling: 60,
  };

  const toppings = {
    crushedNuts: 65, cookiePieces: 50, sprinkles: 40, chocolateChips: 48,
    strawberryFruits: 4, blueberryFruits: 6, mangoFruits: 7, cranberryFruits: 8,
    honeyDrizzleTopping: 32, orangePeel: 30, candyBits: 42,
  };

  let total = 0;

  if (product.chocolateBase && chocolateBases[product.chocolateBase]) {
    total += chocolateBases[product.chocolateBase];
  }

  product.flavorInfusion?.forEach((item) => {
    total += flavors[item] || 0;
  });

  product.fillings?.forEach((item) => {
    total += fillings[item] || 0;
  });

  product.toppings?.forEach((item) => {
    total += toppings[item] || 0;
  });

  return total;
};

export default orderSlice.reducer;

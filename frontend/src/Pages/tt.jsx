import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chocolateBase: null,
  flavorInfusion: [],
  fillings: [],
  toppings: [],
  shapeDesign: null,
  dietaryPreferences: [],
  packaging: null,
  addOnExtras: [],
};

// Define all item prices here
const priceMap = {
  // Chocolate Base
  milk: 50,
  dark50: 55,
  dark70: 60,
  dark85: 65,
  white: 50,
  ruby: 70,
  sugarFree: 60,
  vegan: 65,

  // Flavor Infusion
  Mint: 8,
  Caramel: 10,
  Strawberry: 10 ,
  Lemon: 9,
  Coconut: 11,
  Vanilla: 10,
  Orange: 9,
  Hazelnut: 12 ,
  Coffee:10,
  Blueberry: 12,

  // Fillings
  Almond: 30,
  Cashew: 25,
  Hazelnut: 20,
  Walnut: 20,
  Pistachio: 30,
  caramelFilling:12,
  strawberryJam:10,
  raspberryJam:10,
  blueberryJam:12,
  milkGanache:15,
  darkGanache:15,
  whiteGanache:15,
  seaSaltCaramel:14,
  roseFlowers:16,
  lavenderFlowers:16,
  cookieCrumbs:10,
  honeyDrizzleFilling:12,

  // Toppings
  crushedNuts: 10,
  cookiePieces: 12,
  sprinkles: 8,
  chocolateChips: 15,
  strawberryFruits: 18,
  blueberryFruits:18,
  mangoFruits:20,
  cranberryFruits:20,
  honeyDrizzleTopping:12,
  orangePeel:14,
  candyBits:10,

  // Shape & Design
  regularBar: 10,
  miniBar: 15,
  largeBar: 15,
  roundTruffles:10,
  heartTruffles:10,
  starTruffles:10,
  customTruffles:10,
  chocolateDiscs:10,
  birthdayMold:10,
  anniversaryMold:10,
  corporateLogo:10,
  textEngraving:10,


  // Dietary Preferences
  vegan: 10,
  glutenFree: 10,
  nutFree: 5,
  lactoseFree: 10,

  // Packaging
  ecoFriendly: 0,
  luxuryBox: 25,
  tin: 15,

  // Add-On Extras
  message: 10,
  occasionTag: 15,
  giftCard: 30,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderOption: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    resetOrder: () => initialState,
  },
});

export const { setOrderOption, resetOrder } = orderSlice.actions;

export const selectOrder = (state) => state.order;

export const getTotalCost = (state) => {
  let total = 0;
  const order = state.order;

  Object.entries(order).forEach(([key, value]) => {
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

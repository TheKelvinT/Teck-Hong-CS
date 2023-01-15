import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  count: [],
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addToCart: (state, action) => {
      const item = state.cart.find(
        (product) => product.id === action.payload.id
      );

      console.log(item);
      if (item) {
        item.count += action.payload.count;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.product],
        };
      }
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart: (state, action) => {
      state.products = [];
    },
    increaseCount: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          product.count++;
        }
        return product;
      });
    },
    decreaseCount: (state, action) => {
      state.products = state.products.map((item) => {
        if (product.id === action.payload.id && product.count > 1) {
          product.count--;
        }
        return product;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setProducts,
  addToCart,
  removeFromCart,
  resetCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    // addToCart: (state, action) => {
    //   const cartItemIndex = state.cart.findIndex(
    //     (product) => product.id === action.payload.product.id
    //   );

    //   console.log("index of item", cartItemIndex);

    //   if (cartItemIndex !== -1) {
    //     return {
    //       ...state,
    //       count: [...(state.count + action.payload.product.count)], // this is append the existing count to the new count aded for same product
    //       cart: [action.payload.product], // also we should update the cart witht latest cart item
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       cart: [...state.cart, action.payload.product],
    //     };
    //   }
    // },
    addToCart: (state, action) => {
      const product = state.cart.find(
        (product) => product.id === action.payload.product.id
      );

      if (product) {
        product.count += action.payload.product.count;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload.product],
        };
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.cart = [];
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          product.count++;
        }
        return product;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
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

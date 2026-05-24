import { createSlice } from "@reduxjs/toolkit";

const carts = JSON.parse(localStorage.getItem("cart") || "[]");

const updateTotals = (state) => {
  state.itemCount = state.carts.reduce((s, i) => s + i.quantity, 0);
  state.totalAmount = state.carts.reduce((s, i) => s + i.price * i.quantity, 0);
  localStorage.setItem("cart", JSON.stringify(state.carts));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts,
    itemCount: carts.reduce((s, i) => s + i.quantity, 0),
    totalAmount: carts.reduce((s, i) => s + i.price * i.quantity, 0),
  },
  reducers: {
    addToCart(state, action) {
      const { product, quantity } = action.payload;
      const item = state.carts.find((i) => i.id === product.id);

      if (item) {
        item.quantity += quantity;
      } else {
        state.carts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity,
        });
      }

      updateTotals(state);
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      const item = state.carts.find((i) => i.id === id);  
      if (item) {
        item.quantity = quantity;
        updateTotals(state);
      }
    },
    removeFromCart(state, action) {
      state.carts = state.carts.filter((i) => i.id !== action.payload);
      updateTotals(state);
    },
    clearCart(state) {
      state.carts = [];
      updateTotals(state);
    },
  },
});

export const { addToCart, updateCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

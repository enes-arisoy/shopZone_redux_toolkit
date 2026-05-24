import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const MIN_LOADER_MS = 1500;

const minDelay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const getProducts = createAsyncThunk("products", async () => {
  const [response] = await Promise.all([
    fetch("https://fakestoreapi.com/products"),
    minDelay(MIN_LOADER_MS),
  ]);
  const data = await response.json();

  return data;
});

export const getCategoryProducts = createAsyncThunk("getCategory", async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();

  return data;
});

export const getDetailProduct = createAsyncThunk("product", async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();

  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDetailProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCategoryProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;

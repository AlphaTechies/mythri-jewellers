import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../config/url";

export const fetchProducts = createAsyncThunk("api/products", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/products/`);
    return response.data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
  }
});

export const fetchProduct = createAsyncThunk(
  "api/products/:id",
  async (payload) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/products/${payload.id}`
      );

      return response.data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
    productImages: [],
    loading: false,
    error: null,
  },
  reducers: {
    handleProductChange: (state, { payload }) => {
      console.log(state.product);
      state.product = { ...state.product, [payload.name]: payload.value };
      console.log(state.product);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.products = payload.products;
      })
      .addCase(fetchProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });

    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.product = payload.product;
        state.productImages = payload.product.images || [];
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { handleProductChange } = productSlice.actions;

export default productSlice.reducer;

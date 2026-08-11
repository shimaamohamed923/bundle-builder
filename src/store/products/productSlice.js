import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsEffects from "./productEffects";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

export const getProducts = createAsyncThunk("products/getProducts", () => {
  return ProductsEffects.getProducts();
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeVariant(state, action) {
      const { productId, variantId } = action.payload;
      const product = state.products.find((item) => item.id === productId);
      if (!product) return;

      product.selectedVariant = variantId;
    },
    increaseQuantity(state, action) {
      const { productId, variantId } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      const variant = product?.variants.find((v) => v.id === variantId);
      if (!variant) return;

      variant.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const { productId, variantId } = action.payload;
      const product = state.products.find((p) => p.id === productId);
      const variant = product?.variants.find((v) => v.id === variantId);
      if (!variant || variant.quantity === 0) return;

      variant.quantity -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { changeVariant, increaseQuantity, decreaseQuantity } =
  productsSlice.actions;

export default productsSlice.reducer;

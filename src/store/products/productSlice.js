import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsEffects from "./productEffects";

// Initial State
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};
export const getProducts = createAsyncThunk("products/getProducts", () => {
  return ProductsEffects.getProducts();
});

// Create Slice
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeVariant(state, action) {
      const { productId, variantId } = action.payload;

      const product = state.products.find((item) => item.id === productId);

      product.selectedVariant = variantId;
    },
    increaseQuantity(state, action) {
      const { productId, variantId } = action.payload;

      const product = state.products.find((p) => p.id === productId);

      const variant = product.variants.find((v) => v.id === variantId);

      variant.quantity += 1;
    },
    decreaseQuantity(state, action) {
      const { productId, variantId } = action.payload;

      const product = state.products.find((p) => p.id === productId);

      const variant = product.variants.find((v) => v.id === variantId);

      if (variant.quantity !== 0) {
        variant.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// Export
export const { changeVariant, increaseQuantity, decreaseQuantity } =
  productsSlice.actions; // al createslice by3ml create action l kol reducer automatic

export default productsSlice.reducer; // kol slice byrg3 reducer function to update state

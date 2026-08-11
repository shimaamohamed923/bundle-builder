import { createSelector } from "@reduxjs/toolkit";
import {
  getPreDiscountTotal,
  getSubtotal,
  isProductSelected,
} from "../../utils/productUtils";

export const selectProducts = (state) => state.products.products;
export const selectProductsLoading = (state) => state.products.isLoading;
export const selectProductsError = (state) => state.products.error;

/**
 * Selector factory: returns a memoized selector for products in a given
 * category. Callers should memoize the returned selector per-category
 * (e.g. with useMemo) so the same selector instance is reused across
 * renders and its cache isn't thrown away.
 */
export const selectProductsByCategory = (category) =>
  createSelector(selectProducts, (products) =>
    products.filter((product) => product.category === category),
  );

export const selectSelectedProducts = createSelector(
  selectProducts,
  (products) => products.filter(isProductSelected),
);

export const selectSelectedProductsByCategory = createSelector(
  selectSelectedProducts,
  (products) =>
    products.reduce((groups, product) => {
      if (!groups[product.category]) {
        groups[product.category] = [];
      }
      groups[product.category].push(product);
      return groups;
    }, {}),
);

export const selectSubtotal = createSelector(
  selectSelectedProducts,
  getSubtotal,
);

export const selectPreDiscountTotal = createSelector(
  selectSelectedProducts,
  getPreDiscountTotal,
);

import { useDispatch } from "react-redux";
import { useMemo } from "react";
import {
  changeVariant,
  decreaseQuantity,
  increaseQuantity,
} from "./productSlice";

/**
 * Bundles the variant/quantity dispatch calls for a single product so
 * components only need a productId and don't have to import action
 * creators or wire up useDispatch themselves.
 */
export function useProductActions(productId) {
  const dispatch = useDispatch();

  return useMemo(
    () => ({
      changeVariant: (variantId) =>
        dispatch(changeVariant({ productId, variantId })),
      increaseQuantity: (variantId) =>
        dispatch(increaseQuantity({ productId, variantId })),
      decreaseQuantity: (variantId) =>
        dispatch(decreaseQuantity({ productId, variantId })),
    }),
    [dispatch, productId],
  );
}

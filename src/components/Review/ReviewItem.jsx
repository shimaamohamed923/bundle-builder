import React, { useEffect } from "react";
import QuantityStepper from "../Product/QuantityStepper";
import Price from "../Product/Price";
import { getProductCompareAt, getProductPrice } from "../../utils/productUtils";

export default function ReviewItem({ product }) {
  return (
    <>
      {product.variants
        ?.filter((variant) => variant.quantity > 0)
        .map((variant) => (
          <div
            key={product.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex w-full items-center">
              <div className="h-9 w-9 shrink-0 overflow-hidden rounded bg-white">
                <img
                  src={product.image}
                  alt=""
                  className="h-full w-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex flex-1 items-center justify-between">
                <p className="flex flex-col px-3 leading-3 font-medium text-gray-c-900">
                  <span className="text-[14px]">{product.name}</span>
                  {variant.id !== "default" ? (
                    <span className="mt-1 text-xs">{variant.label}</span>
                  ) : (
                    ""
                  )}
                </p>
                {product.category !== "plan" && (
                  <QuantityStepper
                    label={product.selectedVariant}
                    productId={product.id}
                    variantId={variant.id}
                    quantity={variant.quantity}
                  />
                )}
              </div>
            </div>
            <Price
              price={getProductPrice(product)}
              compareAt={getProductCompareAt(product)}
            />
          </div>
        ))}
    </>
  );
}

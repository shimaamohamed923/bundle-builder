import React from "react";
import { useDispatch } from "react-redux";
import { changeVariant } from "../../store/products/productSlice";

export default function VariantSelector({ product, activeVariant }) {
  const dispatch = useDispatch();
  const handleChangeVariant = (variantId) => {
    dispatch(
      changeVariant({
        productId: product.id,
        variantId,
      }),
    );
  };

  return (
    product.variants && (
      <div
        className="mb-2.5 flex flex-wrap gap-1.5"
        aria-label={`${product.name} color`}
      >
        {product.variants.map((variant) => (
          <button
            key={variant.id}
            type="button"
            onClick={() => handleChangeVariant(variant.id)}
            aria-pressed={activeVariant?.id === variant.id}
            className={`flex h-6 min-w-16 cursor-pointer items-center justify-center rounded-xs border-[.5px] px-1 text-2xs font-medium text-black-c-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-c focus-visible:ring-offset-2 ${activeVariant?.id === variant.id ? "border-green-c-500 bg-green-c-200/4" : "border-gray-c-400 bg-white "}`}
          >
            {variant.thumbnail && (
              <span className="max-w-7">
                <img src={variant.thumbnail} alt={variant.label} />
              </span>
            )}

            {variant.label}
          </button>
        ))}
      </div>
    )
  );
}

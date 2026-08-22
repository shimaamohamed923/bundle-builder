import QuantityStepper from "./QuantityStepper";
import Price from "./Price";
import VariantSelector from "./VariantSelector";

export default function ProductCard({ product }) {
  const activeVariant = product.variants?.find(
    (variant) => variant.id === product.selectedVariant,
  );

  return (
    <>
      {product.badge && (
        <span className="absolute top-3 left-3 rounded-xl bg-purple-c px-1.5 py-0.5 text-xs font-semibold text-white">
          {product.badge}
        </span>
      )}
      <div className="flex min-h-full flex-col items-center gap-3 xl:flex-row">
        {product.category == "plan" ? (
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-auto sm:w-24">
            <img src={product.image} alt="" className="h-full w-full" />
          </div>
        ) : (
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-auto sm:w-24">
            <img src={product.image} alt={product.name} className="w-full" />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="mb-2 text-base font-semibold text-black-c-900 sm:block">
            {product.name}
          </h3>
          <div className="mb-2.5 text-xs leading-4 font-medium text-black-c-900/75 sm:block">
            {product.description}
            <button
              type="button"
              className="mt-1 inline-flex w-fit items-center gap-0.5 text-blue-c underline underline-offset-2 opacity-100"
            >
              Learn More
            </button>
          </div>
          {product.variants?.length > 1 && (
            <VariantSelector product={product} activeVariant={activeVariant} />
          )}
          <div className="mt-auto flex items-center justify-between">
            {product.category !== "plan" && activeVariant && (
              <QuantityStepper
                label={product.selectedVariant}
                quantity={activeVariant.quantity}
                productId={product.id}
                variantId={activeVariant.id}
              />
            )}
            <Price price={product.price} compareAt={product.compareAt} />
          </div>
        </div>
      </div>
    </>
  );
}

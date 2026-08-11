import { useMemo } from "react";
import { useSelector } from "react-redux";
import { icons } from "../Icons/StepsIcons";
import ProductCard from "../Product/ProductCard";
import { ChevronDownIcon, ChevronUpIcon } from "../Icons/UiIcons";
import { getSelectedCount, isProductSelected } from "../../utils/productUtils";
import { selectProductsByCategory } from "../../store/products/productSelectors";

function getCardClassName(product, index, total) {
  const isLastOdd = total % 2 !== 0 && index === total - 1;
  return [
    "relative max-w-[360px] rounded-[10px] border-2 bg-white p-3 transition duration-200 hover:-translate-y-1 hover:shadow-lg",
    isLastOdd && "xl:col-span-2 xl:justify-self-center",
    isProductSelected(product) ? "border-purple-c/70" : "border-transparent",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function AccordionItem({
  step,
  isOpen,
  onToggle,
  onNext,
  nextLabel,
  stepNumber,
  totalSteps,
}) {
  const selectStepProducts = useMemo(
    () => selectProductsByCategory(step.category),
    [step.category],
  );
  const stepProducts = useSelector(selectStepProducts);
  const selectedCount = getSelectedCount(stepProducts);

  return (
    <div
      className={`border-[#1F1F1F] pb-5 ${isOpen ? "rounded-md border-0 bg-[#edf4ff]" : "border-b-[.5px] bg-white"}`}
    >
      <div className="flex border-b-[.5px] border-[#1F1F1F] px-4 pt-4 pb-1">
        <span className="text-2xs leading-2.5 font-medium tracking-[1.6px] text-gray-c-500 uppercase md:text-2xs">
          step {stepNumber} of {totalSteps}
        </span>
      </div>
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 pt-5"
        onClick={onToggle}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-5 w-5 items-center justify-center md:h-7 md:w-7">
            <img src={icons[step.icon]} alt={step.title} />
          </span>
          <h2 className="text-lg font-semibold text-gray-c-900 md:text-22">
            {step.title}
          </h2>
        </div>

        <span className="flex items-center gap-1 text-[14px] font-medium text-purple-c">
          {isOpen && <span>{selectedCount} selected</span>}
          {isOpen ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
        </span>
      </button>

      {isOpen && (
        <div className="flex w-full flex-wrap px-4 pt-5">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-2">
            {stepProducts.map((product, index) => (
              <article
                key={product.id}
                className={getCardClassName(
                  product,
                  index,
                  stepProducts.length,
                )}
              >
                <ProductCard product={product} />
              </article>
            ))}
          </div>
        </div>
      )}

      {isOpen && nextLabel && (
        <div className="flex justify-center pt-3">
          <button
            type="button"
            onClick={onNext}
            className="h-10 rounded-md border border-purple-c px-6 text-lg font-semibold text-purple-c transition hover:bg-indigo-50 focus:ring-2 focus:ring-purple-c focus:outline-none"
          >
            Next:{nextLabel}
          </button>
        </div>
      )}
    </div>
  );
}

import { MinusIcon, PlusIcon } from "../Icons/UiIcons";
import { useProductActions } from "../../store/products/productActions.hooks";
import StepperButton from "../UI/StepperButton";

export default function QuantityStepper({
  label,
  quantity,
  productId,
  variantId,
}) {
  const { increaseQuantity, decreaseQuantity } = useProductActions(productId);

  return (
    <div className="flex items-center gap-2.5" aria-label={`${label} quantity`}>
      <StepperButton
        type="button"
        aria-label={`Remove one ${label}`}
        disabled={quantity === 0}
        onClick={() => decreaseQuantity(variantId)}
        className="step-btn focus:ring-2 focus:ring-indigo-500 focus:outline-none disabled:cursor-not-allowed disabled:border-gray-c-700 disabled:bg-transparent"
      >
        <MinusIcon />
      </StepperButton>
      <span className="w-3 text-center text-xs font-medium text-slate-800 tabular-nums">
        {quantity}
      </span>
      <StepperButton
        type="button"
        aria-label={`Add one ${label}`}
        onClick={() => increaseQuantity(variantId)}
        className="step-btn focus:ring-2 focus:ring-purple-c focus:outline-none"
      >
        <PlusIcon />
      </StepperButton>
    </div>
  );
}

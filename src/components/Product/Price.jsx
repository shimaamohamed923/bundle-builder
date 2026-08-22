import { formatCurrency } from "../../utils/productUtils";

export default function Price({ price, compareAt }) {
  return (
    <div className="text-right text-base leading-4">
      {compareAt && (
        <div className="compare-price text-red-c line-through">
          {formatCurrency(compareAt)}
        </div>
      )}

      <div className="price mt-1 text-gray-c-800">
        {price === 0 ? "Free" : formatCurrency(price)}
      </div>
    </div>
  );
}

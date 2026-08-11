import { useSelector } from "react-redux";
import {
  selectPreDiscountTotal,
  selectProducts,
  selectSelectedProductsByCategory,
  selectSubtotal,
} from "../../store/products/productSelectors";
import { saveProducts } from "../../utils/productUtils";
import ReviewItem from "./ReviewItem";
import Review from "./Review";
import { TruckIcon } from "../Icons/UiIcons";

export default function ReviewPanel() {
  const products = useSelector(selectProducts);
  const groupByCat = useSelector(selectSelectedProductsByCategory);
  const subtotal = useSelector(selectSubtotal);
  const preDiscountTotal = useSelector(selectPreDiscountTotal);

  const handleSave = () => {
    saveProducts(products);
  };

  return (
    <aside
      className="grid grid-cols-1 gap-x-14 self-start rounded-md bg-[#edf4ff] p-4 sm:p-5 md:grid-cols-2 lg:sticky lg:top-5 xl:grid-cols-1"
      aria-label="Your security system"
    >
      <div>
        <p className="mb-5 text-xs font-medium tracking-[0.16em] text-gray-c-500 uppercase">
          Review
        </p>
        <h2 className="mb-1 text-xl font-semibold text-black-c-900">
          Your security system
        </h2>
        <p className="mb-2.5 text-[14px] leading-4 font-medium text-black-c-900 opacity-75">
          Review your personalized protection system to keep what matters most
          secure.
        </p>
        <div className="mb-3.5 border-t border-slate-300">
          {Object.entries(groupByCat).map(([category, categoryProducts]) => (
            <section
              key={category}
              className="border-b border-slate-300 pt-3.5 pb-2.5"
            >
              <h3 className="mb-2 text-2xs font-medium tracking-wider text-slate-400 uppercase">
                {category}
              </h3>
              <div className="flex flex-col gap-y-3">
                {categoryProducts.map((product) => (
                  <ReviewItem key={product.id} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mb-2.5 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-white text-teal-600">
            <TruckIcon size={20} />
          </div>
          <span className="flex-1 text-xs font-medium text-slate-800">
            Fast Shipping
          </span>
          <span className="text-xs font-semibold text-indigo-700">FREE</span>
        </div>
      </div>
      <Review
        preDiscountTotal={preDiscountTotal}
        subtotal={subtotal}
        handleSave={handleSave}
      />
    </aside>
  );
}

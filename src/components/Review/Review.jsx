import { useState } from "react";
import BadgeCheckIcon from "/images/satisfaction-badge.svg";
import { formatCurrency } from "../../utils/productUtils";

export default function Review({ preDiscountTotal, subtotal, handleSave }) {
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const savings = Math.max(preDiscountTotal - subtotal, 0);

  return (
    <div>
      <div className="flex items-center justify-between gap-2">
        <img
          src={BadgeCheckIcon}
          alt=""
          className="text-indigo-700"
        />
        <div className="flex flex-col">
          <div className="flex justify-end">
            <span className="h-5 rounded bg-purple-c px-2 text-center text-xs leading-5 font-medium text-white">
              as low as $19/mo
            </span>
          </div>
          <div className="mt-2 flex-1 text-[11px] leading-3 text-slate-600">
            <div className="text-right">
              <span className="mr-1 text-sm text-slate-400 line-through">
                {formatCurrency(preDiscountTotal)}
              </span>
              <strong className="text-xl text-indigo-700">
                {formatCurrency(subtotal)}
              </strong>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2.5 mb-1 text-center text-[12px] font-medium text-[#0AA288]">
        Congrats! You're saving {formatCurrency(savings)} on your security
        bundle!
      </p>
      <button
        type="button"
        onClick={() =>
          setCheckoutMessage("Your system is ready — checkout is coming soon.")
        }
        className="flex w-full items-center justify-center gap-2 rounded-sm bg-purple-c px-4 py-3 text-base font-semibold text-white transition hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
      >
        Checkout
      </button>

      {checkoutMessage && (
        <p
          className="mt-2 flex items-center justify-center gap-1 text-center text-xs font-medium text-emerald-700"
          role="status"
        >
          {checkoutMessage}
        </p>
      )}
      <button
        type="button"
        onClick={handleSave}
        className="mt-2 block w-full text-center text-sm text-gray-c-500 italic underline underline-offset-2 hover:text-purple-c focus:outline-none"
      >
        Save my system for later
      </button>
    </div>
  );
}

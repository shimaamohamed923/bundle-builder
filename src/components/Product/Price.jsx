import React, { useEffect } from "react";

export default function Price({ price, compareAt }) {
  return (
    <div className="text-right text-base leading-4">
      {compareAt && (
        <div className="compare-price text-red-c line-through">
          ${compareAt.toFixed(2)}
        </div>
      )}

      <div className="price mt-1 text-gray-c-800">${price.toFixed(2)}</div>
    </div>
  );
}

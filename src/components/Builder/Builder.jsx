import React, { useEffect } from "react";
import steps from "../../data/steps.json";
import Accordion from "./Accordion";
import { useDispatch, useSelector } from "react-redux";
import ReviewPanel from "../Review/ReviewPanel";

import { getProducts } from "../../store/products/productSlice";

export default function Builder() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-[29px] xl:grid-cols-[768px_399px]">
      <section
        className="overflow-hidden"
        aria-label="Build your security system"
      >
        <Accordion steps={steps} products={products} />
      </section>
      <ReviewPanel products={products} />
    </div>
  );
}

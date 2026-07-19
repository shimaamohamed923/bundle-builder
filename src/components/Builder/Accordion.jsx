import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ steps, products }) {
  const [openStep, setOpenStep] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpenStep((prev) => prev ?? 1);
      } else {
        setOpenStep(null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleToggle = (id) => {
    setOpenStep((prev) => (prev === id ? null : id));
  };
  const handleNext = (currentId) => {
    const currentIndex = steps.findIndex((step) => step.id === currentId);

    if (currentIndex < steps.length - 1) {
      setOpenStep(steps[currentIndex + 1].id);
    }
  };

  return (
    <>
      {steps.map((step, index) => (
        <AccordionItem
          key={step.id}
          step={step}
          isOpen={openStep === step.id}
          onToggle={() => handleToggle(step.id)}
          onNext={() => handleNext(step.id)}
          nextLabel={steps[index + 1]?.title}
          products={products}
        />
      ))}
    </>
  );
}

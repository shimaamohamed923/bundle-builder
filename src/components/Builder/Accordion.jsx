import { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

const DESKTOP_QUERY = "(min-width: 1280px)";

export default function Accordion({ steps }) {
  const [openStep, setOpenStep] = useState(null);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);

    const syncWithViewport = (isDesktop) => {
      setOpenStep((prev) => (isDesktop && prev === null ? steps[0]?.id : prev));
    };

    syncWithViewport(mql.matches);

    const handleChange = (event) => syncWithViewport(event.matches);
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, [steps]);

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
          stepNumber={index + 1}
          totalSteps={steps.length}
          isOpen={openStep === step.id}
          onToggle={() => handleToggle(step.id)}
          onNext={() => handleNext(step.id)}
          nextLabel={steps[index + 1]?.title}
        />
      ))}
    </>
  );
}

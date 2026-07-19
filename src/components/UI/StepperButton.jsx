export default function StepperButton({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex h-5 w-5 items-center justify-center rounded-[4px] border-2 border-transparent bg-gray-c-700 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

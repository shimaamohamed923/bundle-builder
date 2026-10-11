import "./App.css";
import Builder from "./components/Builder/Builder";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[1196px] bg-white py-4 text-slate-900 sm:py-6">
      <Builder />
      <Analytics />
    </main>
  );
}

export default App;

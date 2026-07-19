import { useState } from "react";
import "./App.css";
import Builder from "./components/Builder/Builder";

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-[1196px] bg-white py-4 text-slate-900 sm:py-6">
      <Builder />
    </main>
  );
}

export default App;

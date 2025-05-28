import { useState } from "react";
import Header from "./Components/Header";
import Counter from "./Components/Counter";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-start ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <Counter isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;

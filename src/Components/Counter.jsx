import Button from "../Base/Button";
import { useState } from "react";

function Counter({isDarkMode}) {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center gap-y-5 justify-center w-full h-fit">
      <div className="w-full h-fit flex items-center justify-center gap-x-5">
        <Button
          color="red"
          text="Decrement"
          onclick={() => setCount((prev) => (prev > 0 ? prev - 1 : prev))}
        />
        <div className={`w-40 h-40 ${isDarkMode ? "bg-white" : "bg-black"} rounded-full flex items-center justify-center`}>
          <h1 className={`${isDarkMode ? "text-black" : "text-white"} text-5xl font-semibold`}>{count}</h1>
        </div>
        <Button
          color="green"
          text="Increment"
          onclick={() => setCount((prev) => prev + 1)}
        />
      </div>
      <div className="w-full h-fit flex items-center justify-center">
        <Button color="gray" text="Reset" onclick={() => setCount(0)} />
      </div>
    </main>
  );
}

export default Counter;

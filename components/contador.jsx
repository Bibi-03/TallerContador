import { useState } from "react";

const contador = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }else {
      alert("No puedes disminuir más. El contador ya está en cero.");
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl font-bold mb-4">{count}</div>
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={increment}
        >
          Incrementar
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={decrement}
        >
          Decrementar
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={reset}
        >
          Resetear
        </button>
      </div>
    </div>
  );
};

export default contador;

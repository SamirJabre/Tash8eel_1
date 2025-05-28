function Button({ color, text ,onclick}) {
  return (
    <button
      onClick={onclick}
      className={`w-24 h-24 rounded-full ${
        color === "red"
          ? "bg-red-500"
          : color === "green"
          ? "bg-green-500"
          : "bg-gray-500"
      } text-white transition-all duration-150 hover:scale-110 hover:cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default Button;

import React from "react";

const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient py-4 px-6 font-poppins text-[18px] font-medium text-primary outline-none ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;

import React from "react";
interface BtnProps {
  text: string;
}
const Button = (props: BtnProps) => {
  return (
    <div>
      <button
        className="text-lg px-3.5 py-2.5 bg-black text-white font-semibold border-2 border-black rounded-3xl
         hover:bg-btnColor hover:text-black uppercase max-[478px]:text-sm max-lg:text-base"
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;

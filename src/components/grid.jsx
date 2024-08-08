import React from "react";

export default function Grid({ children, prize }) {
  return (
    <div className="grid grid-rows-5 grid-cols-5 size-max p-2.5 border border-[#222222] relative">
      {[...Array(25)].map((_, index) => {
        return (
          <div
            key={index}
            className="flex-1 border border-[#222222] text-[#222222] h-16 w-16 flex items-center justify-center"
          >
            {prize === index && <span className="size-2 bg-red-500"></span>}
          </div>
        );
      })}
      {children}
    </div>
  );
}

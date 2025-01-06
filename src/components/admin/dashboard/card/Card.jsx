import React, { useContext, useMemo } from "react";
import { FaCaretDown } from "react-icons/fa";

const Cards = ({ title, amount, percentage,color,i }) => {
  const theme = 'light'
  const colors = useMemo(()=>["#00FFC6","#E596E1","#FF9372","#F76271"],[])
  return (
    <div className="shadow-special dark:shadow-special2  rounded-xl p-3 max-w-[100%]  ">

      <p className={`text-sm font-semibold text-start py-3 text-black dark:text-white`}>{title}</p>

      <div className=" grid grid-flow-col justify-stretch ">
        <p className={`text-3xl font-medium py-3 `} style={{color:color}}>
          {amount}.000
          <span className={`text-base font-medium ${theme === "dark" ? "text-white" : "text-black"}`}>AED</span>
        </p>
      </div>
      {percentage && (
        <div className="flex justify-end gap-1 text-[#F00]">
          <span>
            <FaCaretDown />
          </span>
          <p className="text-end text-xs">{percentage}%</p>
        </div>
      )}
    </div>
  );
};

export default Cards;

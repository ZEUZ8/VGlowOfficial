import React from "react";


const Card = ({title,icon}) => {
  return (
    <div className="flex justify-between items-center border  p-1 rounded-md  text-center cursor-pointer boxShadow px-3 gap-5">
      <p className="text-sm font-normal">{title}</p>
      <p>
        <img src={`/${icon}.png`} className="h-[1.5rem]" alt="" />
      </p>
    </div>
  );
};

export default Card;

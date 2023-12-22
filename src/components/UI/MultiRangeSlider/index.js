"use client";
import { useEffect, useState } from "react";

const MultiRangeSlider = ({ min, setMin, max, setMax }) => {

  useEffect(() => {
    localStorage.setItem('minValue', min)
    localStorage.setItem('maxValue', max)  
  },[min, max])

  return (
    <div className="flex flex-col w-96">
      <div className="flex justify-start items-center my-6">
        <div className="rounded-md">
          <span className="p-2 font-semibold">Min</span>
          <input
            onChange={(e)=> setMin(e.target.value)}
            type="number"
            value={min}
            className="w-20 rounded-md border border-gray-400 text-right"
          />
          <span className="p-2 font-semibold">€</span>
        </div>
        <div className="w-14"></div>
        <div className="rounded-md">
          <span className="p-2 font-semibold">Max</span>
          <input
            onChange={(e)=> setMax(e.target.value)}
            type="number"
            value={max}
            className="w-20 rounded-md border border-gray-400 text-right"
          />
          <span className="p-2 font-semibold">€</span>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;

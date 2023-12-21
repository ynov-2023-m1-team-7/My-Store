"use client";
import { useEffect, useState } from "react";

const MultiRangeSlider = ({ min, max }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

  useEffect(() => {
    localStorage.setItem('minValue', minValue)
    localStorage.setItem('maxValue', maxValue)
  },[minValue, maxValue])

  return (
    <div className="flex flex-col w-96">
      <div className="flex justify-start items-center my-6">
        <div className="rounded-md">
          <span className="p-2 font-semibold">Min</span>
          <input
            onChange={(e)=> setMinValue(e.target.value)}
            type="number"
            value={minValue}
            className="w-20 rounded-md border border-gray-400 text-right"
          />
          <span className="p-2 font-semibold">€</span>
        </div>
        <div className="w-14"></div>
        <div className="rounded-md">
          <span className="p-2 font-semibold">Max</span>
          <input
            onChange={(e)=> setMaxValue(e.target.value)}
            type="number"
            value={maxValue}
            className="w-20 rounded-md border border-gray-400 text-right"
          />
          <span className="p-2 font-semibold">€</span>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;

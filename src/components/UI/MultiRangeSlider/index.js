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
      <h1 className="text-3xl font-bold text-gray-800 mb-1">Range slider</h1>

      <div className="flex justify-between items-center my-6">
        <div className="rounded-md">
          <span className="p-2 font-semibold">Min</span>
          <input
            onChange={(e)=> setMinValue(e.target.value)}
            type="number"
            value={minValue}
            className="w-24 rounded-md border border-gray-400"
          />
        </div>
        <div className="rounded-md">
          <span className="p-2 font-semibold">Max</span>
          <input
            onChange={(e)=> setMaxValue(e.target.value)}
            type="number"
            value={maxValue}
            className="w-24 rounded-md border border-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;

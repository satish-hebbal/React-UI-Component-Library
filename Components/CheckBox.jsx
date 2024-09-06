import React, { useState } from 'react';

const CheckBox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors duration-200 ease-in-out ${isChecked ? 'bg-buttonBG border-orange-500' : 'border-gray-300'}`}>
        {isChecked && (
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

export default CheckBox;
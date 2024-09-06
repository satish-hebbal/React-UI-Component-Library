import React, { useState } from 'react';

const RadioButton = ({ label, name, value, selectedValue, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out ${selectedValue === value ? 'bg-baseSaf border-buttonBG' : 'border-gray-300'}`}>
        {selectedValue === value && (
          <div className="w-3 h-3 bg-white rounded-full"></div>
        )}
      </div>
      <input
        type="radio"
        className="sr-only"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
};

const RadioButtonGroup = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <div className='flex flex-col gap-2 '>
      <RadioButton 
        label="Option 1" 
        name="options" 
        value="option1" 
        selectedValue={selectedValue} 
        onChange={setSelectedValue} 
      />
      <RadioButton 
        label="Option 2" 
        name="options" 
        value="option2" 
        selectedValue={selectedValue} 
        onChange={setSelectedValue} 
      />
      <RadioButton 
        label="None" 
        name="options" 
        value="option3" 
        selectedValue={selectedValue} 
        onChange={setSelectedValue} 
      />
    </div>
  );
};

export default RadioButtonGroup;

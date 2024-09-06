import React, { useState } from 'react';

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState('option2');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="min-w-80 max-w-96 flex flex-col gap-2">
      <label className="text-gray-600">Select date</label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-textBoxBG ring-1 ring-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-1 focus:ring-orange-300"
          value={selectedOption}
          onChange={handleChange}
        >
          <option  value="option1">Option 1</option>
          <option  value="option2">Option 2</option>
          <option  value="option3">Option 3</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.5 7L10 12l4.5-5h-9z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default SelectOption;

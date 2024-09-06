import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelectOption = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' }
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const customStyles = {
    control: (styles, { isFocused }) => ({
        ...styles,
        backgroundColor: '#fffff4', // orange-200
        borderWidth: '2px', // Equivalent to ring-1
        borderColor: isFocused ? '#fdba74' : '#e5e7eb', // gray-200 normally, orange-200 on focus/hover
        boxShadow: null,
        '&:hover': {
          borderColor: null, // orange-200 on hover
        },
      }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#fed7aa', // Tailwind's orange-200
      borderRadius: '10px', // Full rounded
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: '#374151', // Tailwind's gray-700
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      borderRadius:'20px',
      color: '#6b7280', // Tailwind's gray-500
      '&:hover': {
        backgroundColor: '#fed7aa', // Tailwind's orange-500 on hover
        color: 'ff9933',
      },
    }),
  };

  return (
    <div className="w-96 flex flex-col gap-2">
      <label className="text-gray-600">Select Multiple Options</label>
      <Select
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        options={options}
        className="basic-multi-select"
        classNamePrefix="select"
        styles={customStyles}
      />
    </div>
  );
};

export default MultiSelectOption;

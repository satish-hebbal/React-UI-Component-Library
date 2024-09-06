import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
  
    <div className='p-6'>

        <div className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer
         transition-colors duration-300 ease-in-out

         ${isOn ? 'bg-buttonBG ring-1 ring-orange-300' : 'bg-orange-200 ring-1 ring-orange-300'}`}

        onClick={toggleSwitch}
        >
        <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out 
            ${isOn ? 'translate-x-6' : ''}`}
        />
        </div>
   
    </div>
  );
};

export default ToggleSwitch;
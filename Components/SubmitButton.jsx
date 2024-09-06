import React from 'react';

const SubmitButton = ({ onClick, label }) => {
    return (
        <button
            onClick={onClick}
            className="px-6 py-2 bg-buttonBG text-white font-semibold rounded-md transition-all
            duration-300 ease-in-out hover:bg-orange-300 hover:shadow-lg focus:outline-none
            focus:ring-1 focus:ring-orange-300 focus:ring-opacity-75 active:bg-blue-700"
        >
            {label}
        </button>
    );
};

export default SubmitButton;

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';

const SelectDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="flex flex-col gap-2 w-96">
            <label className="text-gray-600">Select date</label>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMM dd, yyyy"
                className="w-full h-12 px-4 py-2 ring-2 bg-textBoxBG ring-gray-200 rounded-md focus:bg-white outline-none focus:ring-2 focus:ring-orange-300"
                popperPlacement="bottom-start"
                renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
                    <div className="flex justify-between px-2 py-2">
                        <button onClick={decreaseMonth} className="focus:outline-none">
                            &#x276E;
                        </button>
                        <span className="text-lg font-medium">
                            {format(monthDate, 'MMMM yyyy')}
                        </span>
                        <button onClick={increaseMonth} className="focus:outline-none">
                            &#x276F;
                        </button>
                    </div>
                )}
            />
        </div>
    );
};

export default SelectDate;

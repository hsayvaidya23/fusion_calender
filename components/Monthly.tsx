import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; 
import { FaMusic, FaVolleyballBall } from "react-icons/fa"; 

const Monthly = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 2, 1)); 

  // Function to handle month change
  const changeMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1); 
    } else {
      newDate.setMonth(newDate.getMonth() + 1); 
    }
    setCurrentDate(newDate);
  };

  // Get the current month and year
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Generate days for the current month
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const calendarDays = [...Array(firstDayOfMonth).fill(null), ...daysArray];

  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-4xl mx-auto p-4">
        {/* Calendar Grid */}
        <div className="mt-8">
          {/* Month Navigation */}
          <div className="flex items-center justify-between">
            {/* Month and Year */}
            <h2 className="text-3xl font-bold">
              {month} {year}
            </h2>

            {/* Arrow Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => changeMonth("prev")}
                className="text-gray-500 hover:text-gray-700"
              >
                <AiOutlineLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => changeMonth("next")}
                className="text-gray-500 hover:text-gray-700"
              >
                <AiOutlineRight className="w-6 h-6" /> 
              </button>
            </div>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-2 mt-4 text-center">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-gray-500 font-medium">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7 gap-2 mt-4 text-center">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex flex-col items-center justify-center border border-gray-200 ${
                  day ? "bg-blue-100" : "bg-gray-100"
                }`}
              >
                {day && (
                  <>
                    {/* Day Number */}
                    <span className="text-lg font-semibold">{day}</span>

                    {/* Event Icons */}
                    <div className="mt-2 flex space-x-1">
                      {(index === 2 || index === 6 || index === 7 || index === 11) && (
                        <>
                          <FaVolleyballBall className="w-4 h-4 text-gray-600" /> {/* React Icon for volleyball */}
                          <FaMusic className="w-4 h-4 text-gray-600" /> {/* React Icon for music */}
                        </>
                      )}
                    </div>

                    {/* Additional Content (e.g., Events) */}
                    <div className="mt-2 text-sm text-gray-600">
                      {index === 2 && "Birthday Party"}
                      {index === 6 && "Meeting"}
                      {index === 7 && "Concert"}
                      {index === 11 && "Workshop"}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monthly;
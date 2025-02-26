import React from 'react';

const Daily = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      {/* Date Grid */}
      <div className="flex justify-between mb-4">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={day} className="text-center">
            <p className="text-gray-500">{day}</p>
            <p
              className={`text-lg font-semibold ${
                index === 3
                  ? 'bg-pink-100 text-pink-500 rounded-full w-8 h-8 flex items-center justify-center'
                  : ''
              }`}
            >
              {23 + index}
            </p>
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="space-y-4">
        {/* Event 1 */}
        <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-4 rounded-lg flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">
              <i className="fas fa-circle text-blue-500 mr-2"></i>12:00 AM - 7:00 AM
            </p>
            <p className="text-lg font-semibold">
              <i className="fas fa-basketball-ball text-black mr-2"></i>Birthday Party - Alice
            </p>
            <p className="text-sm text-gray-500">
              <i className="fas fa-sparkles text-pink-500 mr-2"></i>Brine
            </p>
          </div>
          <i className="fas fa-ellipsis-v text-gray-500"></i>
        </div>

        {/* Event 2 */}
        <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-4 rounded-lg flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">
              <i className="fas fa-circle text-blue-500 mr-2"></i>1:00 PM - 8:00 PM
            </p>
            <p className="text-lg font-semibold">
              <i className="fas fa-basketball-ball text-black mr-2"></i>Birthday Party - David
            </p>
            <p className="text-sm text-gray-500">
              <i className="fas fa-sparkles text-pink-500 mr-2"></i>Brine
            </p>
          </div>
          <i className="fas fa-ellipsis-v text-gray-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Daily;
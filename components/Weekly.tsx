import React from "react";
import { FaMusic, FaFlag, FaBirthdayCake } from "react-icons/fa"; // React Icons for events

const WeeklyCalendar = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Calendar Container */}
        <div className="bg-white rounded-lg shadow">
          {/* Calendar Grid */}
          <div className="p-4">
            {/* Weekday Headers */}
            <div className="grid grid-cols-8 gap-2 text-center text-gray-500">
              <div></div>
              <div>Sun<br /><span className="text-black font-semibold">23</span></div>
              <div>Mon<br /><span className="text-black font-semibold">24</span></div>
              <div>Tue<br /><span className="text-black font-semibold">25</span></div>
              <div>Wed<br /><span className="text-black font-semibold">26</span></div>
              <div>Thu<br /><span className="text-black font-semibold">27</span></div>
              <div>Fri<br /><span className="text-black font-semibold">28</span></div>
              <div>Sat<br /><span className="text-black font-semibold">29</span></div>
            </div>

            {/* Time Slots and Events */}
            <div className="grid grid-cols-8 gap-2 mt-2 text-center text-gray-500">
              {[
                "12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM",
                "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM",
              ].map((time, index) => (
                <React.Fragment key={time}>
                  {/* Time Slot */}
                  <div className="flex items-center justify-end pr-2">
                    {time}
                  </div>

                  {/* Events */}
                  <div className="col-span-7">
                    {/* Event 1 - 5AM */}
                    {time === "5AM" && (
                      <div className="col-span-1 row-span-2 bg-pink-100 rounded-lg p-2 text-left">
                        <FaMusic className="inline-block mr-1" /> <br />
                        Coding Workshop - David <br />
                        <span className="text-gray-400">Brine</span>
                      </div>
                    )}

                    {/* Event 2 - 6AM */}
                    {time === "6AM" && (
                      <div className="col-span-1 row-span-2 bg-blue-100 rounded-lg p-2 text-left">
                        <FaFlag className="inline-block mr-1" /> <br />
                        Project Deadline - Emma <br />
                        <span className="text-gray-400">Brine</span>
                      </div>
                    )}

                    {/* Event 3 - 10AM */}
                    {time === "10AM" && (
                      <div className="col-span-1 row-span-2 bg-pink-100 rounded-lg p-2 text-left">
                        <FaMusic className="inline-block mr-1" /> <br />
                        Weekend Trip - Charlie <br />
                        <span className="text-gray-400">Brine</span>
                      </div>
                    )}

                    {/* Event 4 - 1PM */}
                    {time === "1PM" && (
                      <div className="col-span-1 row-span-2 bg-orange-100 rounded-lg p-2 text-left">
                        <FaBirthdayCake className="inline-block mr-1" /> <br />
                        Birthday Party - Alice <br />
                        <span className="text-gray-400">Brine</span>
                      </div>
                    )}

                    {/* Event 5 - 5PM */}
                    {time === "5PM" && (
                      <div className="col-span-1 row-span-4 bg-orange-100 rounded-lg p-2 text-left">
                        <FaBirthdayCake className="inline-block mr-1" /> <br />
                        Weekend Trip - Bob <br />
                        <span className="text-gray-400">Brine</span>
                      </div>
                    )}

                    {/* Event 6 - 7PM */}
                    {time === "7PM" && (
                      <div className="col-span-1 row-span-2 bg-blue-100 rounded-lg p-2 text-left">
                        <FaFlag className="inline-block mr-1" /> <br />
                        Birthday Party - Alice <br />
                        <span className="text-gray-400">Brine</span>
                      </div>
                    )}

                    {/* Event 7 - 11PM */}
                    {time === "11PM" && (
                      <div className="col-span-1 row-span-2 bg-pink-100 rounded-lg p-2 text-left">
                        <FaMusic className="inline-block mr-1" /> <br />
                        Team Standup - David <br />
                        <span className="text-gray-400">Brine</span>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyCalendar;
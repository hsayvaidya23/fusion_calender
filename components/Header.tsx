"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

// Define view constants
const Views = {
  DAY: "day",
  WEEK: "week",
  MONTH: "month",
};

const CalendarHeader = ({ onViewChange }: any) => {
  const [view, setView] = useState(Views.DAY);

  const handleViewChange = (newView: any) => {
    setView(newView);
    onViewChange(newView);
};

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between w-full mb-4">
        <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
        <Button variant="link" className="text-pink-500 font-semibold">
          + New event
        </Button>
      </div>
      <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
        <div className="flex w-full p-1">
          <Button
            variant="outline"
            className={`flex-1 ${
              view === Views.DAY ? "bg-white" : "bg-gray-100"
            }`}
            onClick={() => handleViewChange(Views.DAY)}
          >
            Daily
          </Button>
          <Button
            variant="outline"
            className={`flex-1 ${
              view === Views.WEEK ? "bg-white" : "bg-gray-100"
            }`}
            onClick={() => handleViewChange(Views.WEEK)}
          >
            Weekly
          </Button>
          <Button
            variant="outline"
            className={`flex-1 ${
              view === Views.MONTH ? "bg-white" : "bg-gray-100"
            }`}
            onClick={() => handleViewChange(Views.MONTH)}
          >
            Monthly
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;

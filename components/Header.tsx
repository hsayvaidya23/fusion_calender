"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

// Define view constants
const Views = {
    DAY: "day",
    WEEK: "week",
    MONTH: "month"
};

const CalendarHeader = () => {
    const [view, setView] = useState(Views.DAY);

    return (
        <div className="mb-6">
            <div className="flex items-center justify-between w-full mb-4">
                <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
                <Button variant="link" className="text-pink-500 font-semibold">+ New event</Button>
            </div>
            <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
        <div className="flex w-full p-1">
          <Button
            variant="outline"
            className={`flex-1 ${view === Views.DAY ? "bg-white" : "bg-gray-100"}`}
            onClick={() => setView(Views.DAY)}
          >
            Daily
          </Button>
          <Button
            variant="outline"
            className={`flex-1 ${view === Views.WEEK ? "bg-white" : "bg-gray-100"}`}
            onClick={() => setView(Views.WEEK)}
          >
            Weekly
          </Button>
          <Button
            variant="outline"
            className={`flex-1 ${view === Views.MONTH ? "bg-white" : "bg-gray-100"}`}
            onClick={() => setView(Views.MONTH)}
          >
            Monthly
          </Button>
        </div>
      </div>
        </div>
    );
};

export default CalendarHeader;

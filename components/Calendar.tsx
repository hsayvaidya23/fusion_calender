'use client';
import { useState } from 'react';
import { Calendar as BigCalendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { mockEvents } from '@/lib/mock-events';
import { EventType } from '@/lib/types';
import { Card, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Music, Briefcase } from 'lucide-react';
import CalendarHeader from './Header';
import Daily from './Daily';
import Weekly from './Weekly';
import Monthly from './Monthly';


const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const views = {
  day: Views.DAY,
  week: Views.WEEK,
  month: Views.MONTH,
};

export default function Calendar() {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const handleViewChange = (newView: any) => {
    setView(newView);
  };

  const eventStyleGetter = (event: EventType) => {
    const isSelected = false; // TODO: Add selection state
    const baseStyle = {
      backgroundColor: event.category === 'work' ? '#E8F3FF' : '#FFE8E8',
      color: 'black',
      border: 'none',
      borderRadius: '8px',
      padding: '4px 8px',
    };

    if (isSelected) {
      return {
        style: {
          ...baseStyle,
          border: '2px solid #3B82F6',
        },
      };
    }

    return { style: baseStyle };
  };

  const CustomEvent = ({ event }: { event: EventType }) => (
    <div className="flex items-center gap-2 px-1">
      {event.category === 'work' ? (
        <Briefcase className="h-4 w-4 flex-shrink-0" />
      ) : (
        <Music className="h-4 w-4 flex-shrink-0" />
      )}
      <div className="flex flex-col">
        <span className="font-medium truncate">{event.title}</span>
        {event.location && (
          <span className="text-sm text-gray-500 truncate">{event.location}</span>
        )}
      </div>
    </div>
  );

  return (
    <Card className="p-4 md:p-6 bg-white shadow-sm">
      <CalendarHeader onViewChange={handleViewChange}/>
      <div className="h-[75vh]">
      {view === Views.DAY && <Daily />}
        {view === Views.WEEK && <Weekly />}
        {view === Views.MONTH && <Monthly />}
      </div>
    </Card>
  );
}
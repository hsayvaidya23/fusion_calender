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
  day: true,
  week: true,
  month: true,
};

export default function Calendar() {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

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
      <CalendarHeader />
      <div className="h-[75vh]">
        <BigCalendar
          localizer={localizer}
          events={mockEvents}
          startAccessor="start"
          endAccessor="end"
          views={views}
          view={view}
          onView={setView}
          date={date}
          onNavigate={setDate}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CustomEvent,
            toolbar: () => null, // Hide default toolbar
          }}
          className="custom-calendar"
        />
      </div>
    </Card>
  );
}
import { EventType } from './types';
import { addDays, addHours, startOfDay, setHours, setMinutes } from 'date-fns';

const today = startOfDay(new Date());

export const mockEvents: EventType[] = [
  {
    id: 1,
    title: 'Birthday Party - Alice',
    start: setHours(setMinutes(today, 0), 0),
    end: setHours(setMinutes(today, 0), 7),
    category: 'personal',
    description: 'Birthday celebration for Alice',
    location: 'Brine'
  },
  {
    id: 2,
    title: 'Project Deadline - Emma',
    start: setHours(setMinutes(addDays(today, 1), 0), 7),
    end: setHours(setMinutes(addDays(today, 1), 0), 14),
    category: 'work',
    description: 'Final project submission',
    location: 'Brine'
  },
  {
    id: 3,
    title: 'Weekend Trip - Charlie',
    start: setHours(setMinutes(addDays(today, 2), 0), 10),
    end: setHours(setMinutes(addDays(today, 2), 0), 12),
    category: 'personal',
    description: 'Weekend getaway',
    location: 'Brine'
  },
  {
    id: 4,
    title: 'Birthday Party - David',
    start: setHours(setMinutes(today, 0), 13),
    end: setHours(setMinutes(today, 0), 20),
    category: 'personal',
    description: 'Birthday celebration for David',
    location: 'Brine'
  },
  {
    id: 5,
    title: 'Team Standup - David',
    start: addHours(addDays(today, 3), 8),
    end: addHours(addDays(today, 3), 9),
    category: 'personal',
    description: 'Daily team standup meeting',
    location: 'Brine'
  }
];
export interface EventType {
  id: number;
  title: string;
  start: Date;
  end: Date;
  category: 'work' | 'personal';
  description: string;
  location: string;
}
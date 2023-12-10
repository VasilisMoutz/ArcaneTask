export type CalendarEvent = {
  title: string;
  date: string;
  start?: string;
  end?: string;
  url?: string;
  backgroundColor?: string;
  textColor?: string;
  description?: string;
  extendedProps?: {
    tags: Map<string, string>;
  };
};

import { createContext } from "react";
import { Event } from "../types/EventType";

interface EventContextType {
  events: Event[] | [];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>> | (() => void);
}

export const EventContext = createContext<EventContextType>({
  events: [],
  setEvents: () => {},
});

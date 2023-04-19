import { useCallback, useEffect } from "react";
import { useState } from "react";
import eventLoader from "../data/eventLoader";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventLoader.init();
    setEvents(eventLoader.getItems());
  }, []);

  const addEvent = useCallback((newEvent) => {
    setEvents((previousEvents) => {
      const updated = previousEvents.concat(newEvent);

      return updated;
    });
  }, []);

  const removeEvent = useCallback((id) => {
    setEvents((previousEvents) => {
      const updated = previousEvents.filter(
        (event) => event.id !== id
      );

      return updated;
    });
  }, []);

  const updatedEvent = useCallback((id, updatedEvent) => {
    setEvents((previousEvents) => {
      const eventToUpdate = {
        ...previousEvents.find((event) => event.id === id),
        ...updatedEvent,
      };
      const updated = previousEvents.map((event) =>
        event.id === id ? eventToUpdate : event
      );

      return updated;
    });
  }, []);

  return { events, addEvent, removeEvent, updatedEvent };
};

export default useCompanies;
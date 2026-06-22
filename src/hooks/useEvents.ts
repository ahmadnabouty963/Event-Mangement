import { useState } from "react";

import { initialEvents } from "../data/initialEvents";
import type { Event } from "../types/event";
import type { EventFormData } from "../components/events/EventForm";

const STORAGE_KEY = "event-board-events";

export type NewAttendeeData = {
  name: string;
  email: string;
};

function getStoredEvents(): Event[] {
  const storedEvents = localStorage.getItem(STORAGE_KEY);

  if (!storedEvents) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));

    return initialEvents;
  }

  try {
    return JSON.parse(storedEvents) as Event[];
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialEvents));

    return initialEvents;
  }
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>(getStoredEvents);

  function saveEvents(updatedEvents: Event[]) {
    setEvents(updatedEvents);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedEvents));
  }

  function addEvent(formData: EventFormData) {
    const newEvent: Event = {
      id: crypto.randomUUID(),
      ...formData,
      attendees: [],
      createdAt: new Date().toISOString().split("T")[0],
    };

    const updatedEvents = [...events, newEvent];

    saveEvents(updatedEvents);
  }

  function updateEvent(eventId: string, formData: EventFormData) {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          ...formData,
        };
      }

      return event;
    });

    saveEvents(updatedEvents);
  }

  function deleteEvent(eventId: string) {
    const updatedEvents = events.filter((event) => {
      return event.id !== eventId;
    });

    saveEvents(updatedEvents);
  }

  function addAttendee(eventId: string, attendeeData: NewAttendeeData) {
    const eventToUpdate = events.find((event) => {
      return event.id === eventId;
    });

    if (!eventToUpdate) {
      return false;
    }

    const eventIsFull =
      eventToUpdate.attendees.length >= eventToUpdate.maxAttendees;

    if (eventIsFull) {
      return false;
    }

    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          attendees: [
            ...event.attendees,
            {
              id: crypto.randomUUID(),
              name: attendeeData.name,
              email: attendeeData.email,
            },
          ],
        };
      }

      return event;
    });

    saveEvents(updatedEvents);

    return true;
  }

  function removeAttendee(eventId: string, attendeeId: string) {
    const updatedEvents = events.map((event) => {
      if (event.id === eventId) {
        return {
          ...event,
          attendees: event.attendees.filter((attendee) => {
            return attendee.id !== attendeeId;
          }),
        };
      }

      return event;
    });

    saveEvents(updatedEvents);
  }

  return {
    events,
    addEvent,
    updateEvent,
    deleteEvent,
    addAttendee,
    removeAttendee,
  };
}

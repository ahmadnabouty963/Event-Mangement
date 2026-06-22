import type { Event } from "../types/event";

export function calculateOccupancy(
  attendeesCount: number,
  maxAttendees: number,
) {
  if (maxAttendees === 0) {
    return 0;
  }

  return Math.round((attendeesCount / maxAttendees) * 100);
}

export function sortEventsByDateAndTime(events: Event[]) {
  return [...events].sort((a, b) => {
    const dateCompare = a.date.localeCompare(b.date);

    if (dateCompare !== 0) {
      return dateCompare;
    }

    return a.time.localeCompare(b.time);
  });
}

export function getEventStats(events: Event[]) {
  const totalEvents = events.length;

  const publishedEvents = events.filter((event) => {
    return event.status === "published";
  }).length;

  const draftEvents = events.filter((event) => {
    return event.status === "draft";
  }).length;

  const cancelledEvents = events.filter((event) => {
    return event.status === "cancelled";
  }).length;

  const completedEvents = events.filter((event) => {
    return event.status === "completed";
  }).length;

  const totalAttendees = events.reduce((sum, event) => {
    return sum + event.attendees.length;
  }, 0);

  const totalCapacity = events.reduce((sum, event) => {
    return sum + event.maxAttendees;
  }, 0);

  const averageOccupancy = calculateOccupancy(totalAttendees, totalCapacity);

  return {
    totalEvents,
    publishedEvents,
    draftEvents,
    cancelledEvents,
    completedEvents,
    totalAttendees,
    totalCapacity,
    averageOccupancy,
  };
}

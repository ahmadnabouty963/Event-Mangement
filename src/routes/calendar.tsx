import { createFileRoute, Link } from "@tanstack/react-router";

import StatusBadge from "../components/events/StatusBadge";
import { useEvents } from "../hooks/useEvents";
import type { Event } from "../types/event";
import { formatDate } from "../utils/dateHelpers";

export const Route = createFileRoute("/calendar")({
  component: CalendarPage,
});

function CalendarPage() {
  const { events } = useEvents();

  const sortedEvents = [...events].sort((a, b) => {
    const dateCompare = a.date.localeCompare(b.date);
    if (dateCompare !== 0) {
      return dateCompare;
    }
    return a.time.localeCompare(b.time);
  });
  const groupedEvents = sortedEvents.reduce<Record<string, Event[]>>(
    (groups, event) => {
      if (!groups[event.date]) {
        groups[event.date] = [];
      }
      groups[event.date].push(event);
      return groups;
    },
    {},
  );

  const groupedEventEntries = Object.entries(groupedEvents);
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
            Event Office
          </p>
          <h1 className="mt-1 text-3xl font-bold text-base-content">
            Calendar
          </h1>
          <p className="mt-2 max-w-2xl text-base text-base-content/65">
            View all events grouped by date.
          </p>
        </div>
        <div className="flex gap-3">
          <Link to="/events" className="btn btn-outline btn-sm">
            View Events
          </Link>
          <Link to="/events/new" className="btn btn-primary btn-sm">
            Create Event
          </Link>
        </div>
      </div>

      {groupedEventEntries.length === 0 ? (
        <div className="rounded-lg border border-base-300 bg-base-100 p-8 text-center">
          <h2 className="text-xl font-semibold">No events available</h2>
          <p className="mt-2 text-base-content/60">
            Create your first event to see it in the calendar.
          </p>
          <Link to="/events/new" className="btn btn-primary btn-sm mt-5">
            Create Event
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          {groupedEventEntries.map(([date, eventsForDate]) => (
            <div
              key={date}
              className="rounded-lg border border-base-300 bg-base-100 p-5"
            >
              <div className="border-b border-base-300 pb-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
                  {formatDate(date)}
                </p>
                <h2 className="mt-1 text-xl font-bold">
                  {eventsForDate.length} event(s)
                </h2>
              </div>
              <div className="mt-5 space-y-3">
                {eventsForDate.map((event) => (
                  <Link
                    key={event.id}
                    to="/events/$eventId"
                    params={{ eventId: event.id }}
                    className="block rounded-md border border-base-300 bg-base-100 p-4 transition hover:border-primary hover:bg-base-200"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="mb-2 flex flex-wrap gap-2">
                          <span className="badge badge-outline">
                            {event.time}
                          </span>
                          <span className="badge badge-outline capitalize">
                            {event.category}
                          </span>
                          <StatusBadge status={event.status} />
                        </div>
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="mt-1 text-sm text-base-content/60">
                          {event.location}
                        </p>
                      </div>
                      <div className="text-sm text-base-content/60">
                        {event.attendees.length} / {event.maxAttendees}{" "}
                        attendees
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

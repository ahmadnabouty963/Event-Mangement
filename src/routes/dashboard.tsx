import { createFileRoute, Link } from "@tanstack/react-router";
import { isUpcomingDate } from "../utils/dateHelpers";
import { useEvents } from "../hooks/useEvents";
import StatusBadge from "../components/events/StatusBadge";
import OccupancyBar from "../components/events/OccupancyBar";
import { getEventStats, sortEventsByDateAndTime } from "../utils/eventHelpers";
export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

function DashboardPage() {
  const { events } = useEvents();
  const {
    totalEvents,
    publishedEvents,
    draftEvents,
    cancelledEvents,
    completedEvents,
    totalAttendees,
    totalCapacity,
    averageOccupancy,
  } = getEventStats(events);
  const upcomingEvents = sortEventsByDateAndTime(
    events.filter((event) => {
      return isUpcomingDate(event.date);
    }),
  );

  const nextEvent = upcomingEvents[0];
  const nextThreeEvents = upcomingEvents.slice(0, 3);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
            Event Office
          </p>

          <h1 className="mt-1 text-3xl font-bold text-base-content">
            Dashboard
          </h1>

          <p className="mt-2 max-w-2xl text-base text-base-content/65">
            Overview of events, attendees, capacity and upcoming activities.
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

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="All Events" value={totalEvents} />
        <StatCard label="Published" value={publishedEvents} tone="success" />
        <StatCard label="Drafts" value={draftEvents} tone="warning" />
        <StatCard label="Attendees" value={totalAttendees} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Cancelled" value={cancelledEvents} tone="error" />
        <StatCard label="Completed" value={completedEvents} />
        <StatCard label="Capacity" value={totalCapacity} />
        <StatCard label="Occupancy" value={`${averageOccupancy}%`} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1.4fr]">
        <div className="rounded-lg border border-base-300 bg-base-100 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
                Next Event
              </p>

              <h2 className="mt-1 text-xl font-bold">
                {nextEvent ? nextEvent.title : "No upcoming event"}
              </h2>
            </div>

            {nextEvent && <StatusBadge status={nextEvent.status} />}
          </div>

          {!nextEvent ? (
            <p className="mt-4 text-sm text-base-content/60">
              There are no upcoming events at the moment.
            </p>
          ) : (
            <div className="mt-5 space-y-4">
              <p className="text-sm text-base-content/65">
                {nextEvent.description}
              </p>

              <div className="grid gap-3 text-sm">
                <InfoRow label="Date" value={nextEvent.date} />
                <InfoRow label="Time" value={nextEvent.time} />
                <InfoRow label="Location" value={nextEvent.location} />
                <InfoRow label="Category" value={nextEvent.category} />
                <InfoRow
                  label="Attendees"
                  value={`${nextEvent.attendees.length} / ${nextEvent.maxAttendees}`}
                />
              </div>

              <Link
                to="/events/$eventId"
                params={{ eventId: nextEvent.id }}
                className="btn btn-primary btn-sm"
              >
                Open Event
              </Link>
            </div>
          )}
        </div>

        <div className="rounded-lg border border-base-300 bg-base-100 p-5">
          <div className="flex flex-col gap-3 border-b border-base-300 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
                Upcoming
              </p>

              <h2 className="mt-1 text-xl font-bold">Next 3 Events</h2>
            </div>

            <Link to="/events" className="btn btn-outline btn-sm">
              Manage all
            </Link>
          </div>

          {nextThreeEvents.length === 0 ? (
            <p className="mt-5 text-sm text-base-content/60">
              No upcoming events found.
            </p>
          ) : (
            <div className="mt-5 space-y-3">
              {nextThreeEvents.map((event) => {
                return (
                  <Link
                    key={event.id}
                    to="/events/$eventId"
                    params={{ eventId: event.id }}
                    className="block rounded-md border border-base-300 bg-base-100 p-4 transition hover:border-primary hover:bg-base-200"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <div className="mb-2 flex flex-wrap gap-2">
                          <span className="badge badge-outline capitalize">
                            {event.category}
                          </span>

                          <StatusBadge status={event.status} />
                        </div>

                        <h3 className="font-semibold">{event.title}</h3>

                        <p className="mt-1 text-sm text-base-content/60">
                          {event.date} at {event.time} · {event.location}
                        </p>
                        <div className="min-w-52">
                          <OccupancyBar
                            attendeesCount={event.attendees.length}
                            maxAttendees={event.maxAttendees}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  label: string;
  value: number | string;
  tone?: "success" | "warning" | "error";
};

function StatCard({ label, value, tone }: StatCardProps) {
  const valueClass =
    tone === "success"
      ? "text-success"
      : tone === "warning"
        ? "text-warning"
        : tone === "error"
          ? "text-error"
          : "text-base-content";

  return (
    <div className="rounded-lg border border-base-300 bg-base-100 p-5">
      <p className="text-sm font-medium text-base-content/55">{label}</p>

      <p className={`mt-2 text-3xl font-bold ${valueClass}`}>{value}</p>
    </div>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-base-300 pb-2 last:border-b-0">
      <span className="text-base-content/55">{label}</span>
      <span className="font-medium capitalize">{value}</span>
    </div>
  );
}

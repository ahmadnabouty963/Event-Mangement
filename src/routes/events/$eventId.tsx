import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import StatusBadge from "../../components/events/StatusBadge";
import AttendeeForm from "../../components/events/AttendeeForm";
import AttendeeList from "../../components/events/AttendeeList";
import OccupancyBar from "../../components/events/OccupancyBar";
import { useEvents } from "../../hooks/useEvents";
import type { NewAttendeeData } from "../../hooks/useEvents";

export const Route = createFileRoute("/events/$eventId")({
  component: EventDetailsPage,
});

function EventDetailsPage() {
  const params = Route.useParams() as { eventId: string };
  const eventId = params.eventId;

  const navigate = useNavigate();

  const { events, deleteEvent, addAttendee, removeAttendee } = useEvents();

  const event = events.find((event) => {
    return event.id === eventId;
  });

  if (!event) {
    return (
      <section className="space-y-6">
        <Link to="/events" className="btn btn-ghost btn-sm">
          ← Back to Events
        </Link>

        <div className="rounded-lg border border-base-300 bg-base-100 p-8 text-center">
          <h1 className="text-2xl font-bold">Event not found</h1>

          <p className="mt-2 text-base-content/60">
            The event you are looking for does not exist.
          </p>

          <Link to="/events" className="btn btn-primary btn-sm mt-5">
            Back to Events
          </Link>
        </div>
      </section>
    );
  }

  function handleDeleteEvent() {
    const shouldDelete = window.confirm(
      "Do you really want to delete this event?",
    );

    if (!shouldDelete) {
      return;
    }

    deleteEvent(eventId);

    navigate({
      to: "/events",
    });
  }

  function handleAddAttendee(attendeeData: NewAttendeeData) {
    return addAttendee(eventId, attendeeData);
  }

  function handleRemoveAttendee(attendeeId: string) {
    const shouldRemove = window.confirm(
      "Do you really want to remove this attendee?",
    );

    if (!shouldRemove) {
      return;
    }

    removeAttendee(eventId, attendeeId);
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link to="/events" className="btn btn-ghost btn-sm mb-4">
            ← Back to Events
          </Link>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline capitalize">
              {event.category}
            </span>

            <StatusBadge status={event.status} />
          </div>

          <h1 className="mt-3 text-3xl font-bold text-base-content">
            {event.title}
          </h1>

          <p className="mt-2 max-w-3xl text-base text-base-content/65">
            {event.description}
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/events/edit/$eventId"
            params={{ eventId }}
            className="btn btn-outline btn-sm"
          >
            Edit Event
          </Link>

          <button
            type="button"
            className="btn btn-error btn-sm"
            onClick={handleDeleteEvent}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <div className="border-b border-base-300 pb-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
                Event Information
              </p>

              <h2 className="mt-1 text-xl font-bold">Details</h2>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <InfoCard label="Date" value={event.date} />
              <InfoCard label="Time" value={event.time} />
              <InfoCard label="Location" value={event.location} />
              <InfoCard label="Category" value={event.category} />
              <InfoCard label="Status" value={event.status} />
              <InfoCard label="Created at" value={event.createdAt} />
            </div>
          </div>

          <AttendeeList
            attendees={event.attendees}
            onRemoveAttendee={handleRemoveAttendee}
          />
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <div className="border-b border-base-300 pb-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
                Capacity
              </p>

              <h2 className="mt-1 text-xl font-bold">Occupancy</h2>
            </div>

            <div className="mt-5">
              <OccupancyBar
                attendeesCount={event.attendees.length}
                maxAttendees={event.maxAttendees}
              />
            </div>
          </div>

          <AttendeeForm onSubmit={handleAddAttendee} />

          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
              Actions
            </p>

            <div className="mt-4 space-y-3">
              <Link
                to="/events/edit/$eventId"
                params={{ eventId }}
                className="btn btn-outline btn-sm w-full"
              >
                Edit Event
              </Link>

              <button
                type="button"
                className="btn btn-error btn-sm w-full"
                onClick={handleDeleteEvent}
              >
                Delete Event
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

type InfoCardProps = {
  label: string;
  value: string | number;
};

function InfoCard({ label, value }: InfoCardProps) {
  return (
    <div className="rounded-md border border-base-300 bg-base-200 p-4">
      <p className="text-sm text-base-content/55">{label}</p>

      <p className="mt-1 font-semibold capitalize text-base-content">{value}</p>
    </div>
  );
}

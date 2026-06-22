import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import EventForm from "../../components/events/EventForm";
import type { EventFormData } from "../../components/events/EventForm";
import { useEvents } from "../../hooks/useEvents";

export const Route = createFileRoute("/events/edit/$eventId")({
  component: EditEventPage,
});

function EditEventPage() {
  const params = Route.useParams() as { eventId: string };
  const eventId = params.eventId;

  const navigate = useNavigate();
  const { events, updateEvent } = useEvents();

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
            The event you want to edit does not exist.
          </p>

          <Link to="/events" className="btn btn-primary btn-sm mt-5">
            Back to Events
          </Link>
        </div>
      </section>
    );
  }

  function handleUpdateEvent(formData: EventFormData) {
    updateEvent(eventId, formData);

    navigate({
      to: "/events/$eventId",
      params: {
        eventId,
      },
    });
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link
            to="/events/$eventId"
            params={{ eventId }}
            className="btn btn-ghost btn-sm mb-4"
          >
            ← Back to Event
          </Link>

          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
            Event Office
          </p>

          <h1 className="mt-1 text-3xl font-bold text-base-content">
            Edit Event
          </h1>

          <p className="mt-2 max-w-2xl text-base text-base-content/65">
            Update the event information and save the changes.
          </p>
        </div>
      </div>

      <div className="max-w-4xl">
        <EventForm
          initialData={event}
          submitButtonText="Save Changes"
          onSubmit={handleUpdateEvent}
        />
      </div>
    </section>
  );
}

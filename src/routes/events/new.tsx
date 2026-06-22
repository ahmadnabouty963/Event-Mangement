import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import EventForm from "../../components/events/EventForm";
import type { EventFormData } from "../../components/events/EventForm";
import { useEvents } from "../../hooks/useEvents";

export const Route = createFileRoute("/events/new")({
  component: NewEventPage,
});

function NewEventPage() {
  const navigate = useNavigate();
  const { addEvent } = useEvents();

  function handleCreateEvent(formData: EventFormData) {
    addEvent(formData);

    navigate({
      to: "/events",
    });
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Link to="/events" className="btn btn-ghost btn-sm mb-4">
            ← Back to Events
          </Link>

          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
            Event Office
          </p>

          <h1 className="mt-1 text-3xl font-bold text-base-content">
            Create Event
          </h1>

          <p className="mt-2 max-w-2xl text-base text-base-content/65">
            Create a new event and save it to localStorage.
          </p>
        </div>
      </div>

      <div className="max-w-4xl">
        <EventForm
          submitButtonText="Create Event"
          onSubmit={handleCreateEvent}
        />
      </div>
    </section>
  );
}

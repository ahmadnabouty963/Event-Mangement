import { Link } from "@tanstack/react-router";
import StatusBadge from "./StatusBadge";
import type { Event } from "../../types/event";
import OccupancyBar from "./OccupancyBar";
//EINMAL FÜR JEDES EVENT ,, ** MUSS NOCH WIEDER SAUBERMACHEN **
type EventCardProps = {
  event: Event;
};

function EventCard({ event }: EventCardProps) {
  return (
    <article className="rounded-lg border border-base-300 bg-base-100 p-5 transition hover:border-primary">
      <div>
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="badge badge-outline capitalize">
            {event.category}
          </span>

          <StatusBadge status={event.status} />
        </div>

        <h2 className="text-lg font-semibold text-base-content">
          {event.title}
        </h2>
      </div>

      <p className="mt-3 text-sm text-base-content/65">{event.description}</p>

      <div className="mt-5 grid gap-2 text-sm">
        <InfoRow label="Date" value={event.date} />
        <InfoRow label="Time" value={event.time} />
        <InfoRow label="Location" value={event.location} />
      </div>

      <div className="mt-5">
        <OccupancyBar
          attendeesCount={event.attendees.length}
          maxAttendees={event.maxAttendees}
        />
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-base-300 pt-4">
        <Link
          to="/events/$eventId"
          params={{ eventId: event.id }}
          className="btn btn-outline btn-sm"
        >
          View Details
        </Link>

        <Link
          to="/events/edit/$eventId"
          params={{ eventId: event.id }}
          className="btn btn-ghost btn-sm"
        >
          Edit
        </Link>
      </div>
    </article>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-base-content/55">{label}</span>
      <span className="font-medium text-base-content">{value}</span>
    </div>
  );
}

export default EventCard;

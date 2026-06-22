import type { Attendee } from "../../types/event";

type AttendeeListProps = {
  attendees: Attendee[];
  onRemoveAttendee: (attendeeId: string) => void;
};

function AttendeeList({ attendees, onRemoveAttendee }: AttendeeListProps) {
  if (attendees.length === 0) {
    return (
      <div className="rounded-lg border border-base-300 bg-base-100 p-5">
        <div className="border-b border-base-300 pb-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
            Attendees
          </p>

          <h2 className="mt-1 text-xl font-bold">Participant list</h2>
        </div>

        <div className="mt-5 rounded-md border border-base-300 bg-base-200 p-5">
          <p className="text-sm text-base-content/60">
            No attendees have been added yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-base-300 bg-base-100 p-5">
      <div className="border-b border-base-300 pb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
          Attendees
        </p>

        <h2 className="mt-1 text-xl font-bold">Participant list</h2>

        <p className="mt-2 text-sm text-base-content/60">
          {attendees.length} attendee(s) registered.
        </p>
      </div>

      <div className="mt-5 divide-y divide-base-300 rounded-md border border-base-300">
        {attendees.map((attendee) => (
          <div
            key={attendee.id}
            className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium">{attendee.name}</p>

              <p className="text-sm text-base-content/60">{attendee.email}</p>
            </div>

            <button
              type="button"
              className="btn btn-error btn-outline btn-sm"
              onClick={() => onRemoveAttendee(attendee.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendeeList;

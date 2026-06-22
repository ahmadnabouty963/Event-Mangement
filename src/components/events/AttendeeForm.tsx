import { useState } from "react";
import type { FormEvent } from "react";

import type { NewAttendeeData } from "../../hooks/useEvents";
// ATTENDEE FROM FÜR HINZUFÜGEN ** ANDERS DENKEN LIEBER **
type AttendeeFormProps = {
  onSubmit: (attendeeData: NewAttendeeData) => boolean;
};

function AttendeeForm({ onSubmit }: AttendeeFormProps) {
  const [formData, setFormData] = useState<NewAttendeeData>({
    name: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");

    const attendeeWasAdded = onSubmit(formData);

    if (!attendeeWasAdded) {
      setErrorMessage("This event is full or the attendee could not be added.");
      return;
    }

    setFormData({
      name: "",
      email: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-base-300 bg-base-100 p-5"
    >
      <div className="border-b border-base-300 pb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
          Attendees
        </p>

        <h2 className="mt-1 text-xl font-bold">Add attendee</h2>

        <p className="mt-2 text-sm text-base-content/60">
          Add a participant to this event.
        </p>
      </div>

      <div className="mt-5 grid gap-4">
        <label className="form-control">
          <span className="label-text mb-2">Name</span>

          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text mb-2">Email</span>

          <input
            type="email"
            className="input input-bordered w-full"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
            required
          />
        </label>

        {errorMessage && (
          <div className="rounded-md border border-error bg-error/10 p-3 text-sm text-error">
            {errorMessage}
          </div>
        )}
      </div>

      <div className="mt-5 flex justify-end border-t border-base-300 pt-4">
        <button type="submit" className="btn btn-primary btn-sm">
          Add attendee
        </button>
      </div>
    </form>
  );
}

export default AttendeeForm;

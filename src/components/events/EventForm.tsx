import { useState } from "react";
import type { FormEvent } from "react";

import type { Event, EventCategory, EventStatus } from "../../types/event";
//ENTWEDER BEARBEITEN ODER NEUE ERSTELLEN
export type EventFormData = {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  status: EventStatus;
  maxAttendees: number;
};
//VIEL HARDCODING MACH WIEDER NEUE GEDANKEN
type EventFormProps = {
  initialData?: Event;
  submitButtonText: string;
  onSubmit: (formData: EventFormData) => void;
};

function EventForm({
  initialData,
  submitButtonText,
  onSubmit,
}: EventFormProps) {
  const [formData, setFormData] = useState<EventFormData>({
    title: initialData?.title ?? "",
    description: initialData?.description ?? "",
    date: initialData?.date ?? "",
    time: initialData?.time ?? "",
    location: initialData?.location ?? "",
    category: initialData?.category ?? "workshop",
    status: initialData?.status ?? "draft",
    maxAttendees: initialData?.maxAttendees ?? 10,
  });
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit(formData);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-base-300 bg-base-100 p-5"
    >
      <div className="border-b border-base-300 pb-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
          Event Form
        </p>

        <h2 className="mt-1 text-xl font-bold">Event information</h2>

        <p className="mt-2 text-sm text-base-content/60">
          Fill in the basic information for this event.
        </p>
      </div>

      <div className="mt-5 grid gap-5">
        <label className="form-control">
          <span className="label-text mb-2">Title</span>

          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={(event) =>
              setFormData({
                ...formData,
                title: event.target.value,
              })
            }
            required
          />
        </label>

        <label className="form-control">
          <span className="label-text mb-2">Description</span>

          <textarea
            className="textarea textarea-bordered min-h-28 w-full"
            value={formData.description}
            onChange={(event) =>
              setFormData({
                ...formData,
                description: event.target.value,
              })
            }
            required
          />
        </label>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="form-control">
            <span className="label-text mb-2">Date</span>

            <input
              type="date"
              className="input input-bordered w-full"
              value={formData.date}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  date: event.target.value,
                })
              }
              required
            />
          </label>

          <label className="form-control">
            <span className="label-text mb-2">Time</span>

            <input
              type="time"
              className="input input-bordered w-full"
              value={formData.time}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  time: event.target.value,
                })
              }
              required
            />
          </label>
        </div>

        <label className="form-control">
          <span className="label-text mb-2">Location</span>

          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.location}
            onChange={(event) =>
              setFormData({
                ...formData,
                location: event.target.value,
              })
            }
            required
          />
        </label>

        <div className="grid gap-5 md:grid-cols-3">
          <label className="form-control">
            <span className="label-text mb-2">Category</span>

            <select
              className="select select-bordered w-full"
              value={formData.category}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  category: event.target.value as EventCategory,
                })
              }
            >
              <option value="workshop">Workshop</option>
              <option value="talk">Talk</option>
              <option value="networking">Networking</option>
              <option value="review">Review</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="form-control">
            <span className="label-text mb-2">Status</span>

            <select
              className="select select-bordered w-full"
              value={formData.status}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  status: event.target.value as EventStatus,
                })
              }
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </label>

          <label className="form-control">
            <span className="label-text mb-2">Max attendees</span>

            <input
              type="number"
              min={1}
              className="input input-bordered w-full"
              value={formData.maxAttendees}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  maxAttendees: Number(event.target.value),
                })
              }
              required
            />
          </label>
        </div>
      </div>

      <div className="mt-6 flex justify-end border-t border-base-300 pt-5">
        <button type="submit" className="btn btn-primary btn-sm">
          {submitButtonText}
        </button>
      </div>
    </form>
  );
}

export default EventForm;

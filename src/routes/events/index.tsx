import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import EventCard from "../../components/events/EventCard";
import { useEvents } from "../../hooks/useEvents";

export const Route = createFileRoute("/events/")({
  component: EventsPage,
});

function EventsPage() {
  const { events } = useEvents();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date-asc");

  const filteredEvents = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    const result = events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchText) ||
        event.description.toLowerCase().includes(searchText) ||
        event.location.toLowerCase().includes(searchText);

      const matchesCategory = category === "all" || event.category === category;

      const matchesStatus = status === "all" || event.status === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });

    return [...result].sort((a, b) => {
      if (sortBy === "date-asc") {
        return a.date.localeCompare(b.date);
      }

      if (sortBy === "date-desc") {
        return b.date.localeCompare(a.date);
      }

      if (sortBy === "title-asc") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "title-desc") {
        return b.title.localeCompare(a.title);
      }

      if (sortBy === "attendees-desc") {
        return b.attendees.length - a.attendees.length;
      }

      if (sortBy === "attendees-asc") {
        return a.attendees.length - b.attendees.length;
      }

      return 0;
    });
  }, [events, search, category, status, sortBy]);

  function resetFilters() {
    setSearch("");
    setCategory("all");
    setStatus("all");
    setSortBy("date-asc");
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
            Event Office
          </p>

          <h1 className="mt-1 text-3xl font-bold text-base-content">Events</h1>

          <p className="mt-2 max-w-2xl text-base text-base-content/65">
            Search, filter and manage all events in one place.
          </p>
        </div>

        <Link to="/events/new" className="btn btn-primary btn-sm">
          Create Event
        </Link>
      </div>

      <div className="rounded-lg border border-base-300 bg-base-100 p-5">
        <div className="mb-4 flex flex-col gap-2 border-b border-base-300 pb-4">
          <h2 className="text-lg font-semibold">Filter events</h2>

          <p className="text-sm text-base-content/60">
            Use search, category, status and sorting to find events faster.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <label className="form-control">
            <span className="label-text mb-2">Search</span>

            <input
              type="text"
              placeholder="Search by title, description or location"
              className="input input-bordered w-full"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label className="form-control">
            <span className="label-text mb-2">Category</span>

            <select
              className="select select-bordered w-full"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="all">All categories</option>
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
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <option value="all">All statuses</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="cancelled">Cancelled</option>
              <option value="completed">Completed</option>
            </select>
          </label>

          <label className="form-control">
            <span className="label-text mb-2">Sort by</span>

            <select
              className="select select-bordered w-full"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <option value="date-asc">Date ascending</option>
              <option value="date-desc">Date descending</option>
              <option value="title-asc">Title A-Z</option>
              <option value="title-desc">Title Z-A</option>
              <option value="attendees-desc">Most attendees</option>
              <option value="attendees-asc">Fewest attendees</option>
            </select>
          </label>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-base-300 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-base-content/60">
            {filteredEvents.length} event(s) found
          </p>

          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={resetFilters}
          >
            Reset filters
          </button>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="rounded-lg border border-base-300 bg-base-100 p-8 text-center">
          <h2 className="text-xl font-semibold">No events found</h2>

          <p className="mt-2 text-base-content/60">
            Try changing the search text or reset the filters.
          </p>

          <button
            type="button"
            className="btn btn-outline btn-sm mt-5"
            onClick={resetFilters}
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}

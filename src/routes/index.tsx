import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-lg border border-base-300 bg-base-100 p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
          Professional Event Office
        </p>

        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-base-content">
          Manage your events, attendees and schedules in one place.
        </h1>

        <p className="mt-4 max-w-2xl text-base text-base-content/65">
          EventBoard is a React event management app. You can create events,
          edit them, manage attendees, track occupancy and view all events in a
          calendar overview.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/events" className="btn btn-primary btn-sm">
            View Events
          </Link>

          <Link to="/events/new" className="btn btn-outline btn-sm">
            Create Event
          </Link>

          <Link to="/dashboard" className="btn btn-ghost btn-sm">
            Open Dashboard
          </Link>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <FeatureCard
          title="Event Management"
          text="Create, edit, delete, search, filter and sort events."
        />

        <FeatureCard
          title="Attendees"
          text="Add and remove participants and check event occupancy."
        />

        <FeatureCard
          title="Calendar"
          text="View all events grouped by date in a simple calendar overview."
        />
      </div>
    </section>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
};

function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <div className="rounded-lg border border-base-300 bg-base-100 p-5">
      <h2 className="text-lg font-bold">{title}</h2>

      <p className="mt-2 text-sm text-base-content/60">{text}</p>
    </div>
  );
}

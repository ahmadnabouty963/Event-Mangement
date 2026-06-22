import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 border-b border-base-300 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
            Event Office
          </p>

          <h1 className="mt-1 text-3xl font-bold text-base-content">
            About EventBoard
          </h1>

          <p className="mt-2 max-w-2xl text-base text-base-content/65">
            EventBoard is a small event management app built with React,
            TypeScript and TanStack Router.
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

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
              Project idea
            </p>

            <h2 className="mt-1 text-xl font-bold">What is EventBoard?</h2>

            <p className="mt-4 text-base text-base-content/65">
              EventBoard is an application for managing events, workshops and
              meetups. Users can create events, edit them, delete them, search
              and filter them, and manage attendees.
            </p>
          </div>

          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
              Features
            </p>

            <h2 className="mt-1 text-xl font-bold">Main functions</h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <FeatureItem title="Dashboard" text="Overview with statistics." />
              <FeatureItem
                title="Events"
                text="Search, filter and sort events."
              />
              <FeatureItem title="Details" text="Open a single event page." />
              <FeatureItem title="Create" text="Create new events." />
              <FeatureItem title="Edit" text="Update existing events." />
              <FeatureItem title="Delete" text="Remove events safely." />
              <FeatureItem
                title="Attendees"
                text="Add and remove participants."
              />
              <FeatureItem title="Calendar" text="Events grouped by date." />
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
              Tech stack
            </p>

            <h2 className="mt-1 text-xl font-bold">Technologies</h2>

            <div className="mt-5 space-y-3">
              <TechItem name="React" description="Component based UI." />
              <TechItem name="TypeScript" description="Typed JavaScript." />
              <TechItem
                name="TanStack Router"
                description="File based routing."
              />
              <TechItem
                name="localStorage"
                description="Save data in the browser."
              />
              <TechItem
                name="Tailwind CSS"
                description="Utility CSS classes."
              />
              <TechItem name="DaisyUI" description="Ready UI components." />
            </div>
          </div>

          <div className="rounded-lg border border-base-300 bg-base-100 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
              Learning goal
            </p>

            <h2 className="mt-1 text-xl font-bold">What I practiced</h2>

            <p className="mt-4 text-sm text-base-content/65">
              In this project I practiced React components, props, state,
              routing, forms, localStorage, conditional rendering and reusable
              UI components.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

type FeatureItemProps = {
  title: string;
  text: string;
};

function FeatureItem({ title, text }: FeatureItemProps) {
  return (
    <div className="rounded-md border border-base-300 bg-base-200 p-4">
      <p className="font-semibold">{title}</p>

      <p className="mt-1 text-sm text-base-content/60">{text}</p>
    </div>
  );
}

type TechItemProps = {
  name: string;
  description: string;
};

function TechItem({ name, description }: TechItemProps) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-base-300 pb-3 last:border-b-0">
      <div>
        <p className="font-medium">{name}</p>

        <p className="text-sm text-base-content/60">{description}</p>
      </div>
    </div>
  );
}

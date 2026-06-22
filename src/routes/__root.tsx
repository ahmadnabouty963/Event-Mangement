import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="drawer lg:drawer-open">
        <input id="main-drawer" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex min-h-screen flex-col">
          <header className="border-b border-base-300 bg-base-100">
            <div className="navbar px-4 lg:px-8">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="main-drawer"
                  className="btn btn-square btn-ghost"
                >
                  ☰
                </label>
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-base-content/60">
                  Event Management
                </p>
              </div>

              <div className="flex-none">
                <div className="flex items-center gap-3">
                  <SignedOut>
                    <SignInButton mode="modal">
                      <button type="button" className="btn btn-ghost btn-sm">
                        Sign in
                      </button>
                    </SignInButton>

                    <SignUpButton mode="modal">
                      <button type="button" className="btn btn-primary btn-sm">
                        Sign up
                      </button>
                    </SignUpButton>
                  </SignedOut>

                  <SignedIn>
                    <Link to="/events/new" className="btn btn-primary btn-sm">
                      Create Event
                    </Link>

                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 lg:p-8">
            <Outlet />
          </main>
        </div>

        <aside className="drawer-side z-40">
          <label htmlFor="main-drawer" className="drawer-overlay" />

          <div className="min-h-full w-72 bg-[#17211E] p-5 text-[#E8ECE7]">
            <div className="mb-8 border-b border-white/10 pb-6">
              <p className="text-xs uppercase tracking-wide text-white/50">
                Professional Event Office
              </p>

              <h1 className="mt-2 text-2xl font-bold">EventBoard</h1>

              <p className="mt-2 text-sm text-white/60">
                Manage events, attendees and schedules.
              </p>
            </div>

            <nav className="space-y-1">
              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                activeProps={{
                  className: "bg-white/10 text-white",
                }}
              >
                Home
              </Link>

              <SignedIn>
                <Link
                  to="/dashboard"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                  activeProps={{
                    className: "bg-white/10 text-white",
                  }}
                >
                  Dashboard
                </Link>
              </SignedIn>

              <Link
                to="/events"
                className="block rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                activeProps={{
                  className: "bg-white/10 text-white",
                }}
              >
                Events
              </Link>

              <Link
                to="/calendar"
                className="block rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                activeProps={{
                  className: "bg-white/10 text-white",
                }}
              >
                Calendar
              </Link>

              <Link
                to="/about"
                className="block rounded-md px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                activeProps={{
                  className: "bg-white/10 text-white",
                }}
              >
                About
              </Link>
            </nav>

            <div className="mt-8 border-t border-white/10 pt-5">
              <SignedOut>
                <div className="space-y-3">
                  <p className="text-sm text-white/60">
                    Sign in to access the dashboard.
                  </p>

                  <SignInButton mode="modal">
                    <button type="button" className="btn btn-sm w-full">
                      Sign in
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center gap-3">
                  <UserButton />

                  <p className="text-sm text-white/60">Signed in</p>
                </div>
              </SignedIn>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

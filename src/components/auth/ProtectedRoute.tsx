import type { ReactNode } from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

type ProtectedRouteProps = {
  children: ReactNode;
};

function ProtectedRoute({ children }: ProtectedRouteProps) {
  return (
    <>
      <SignedOut>
        <section className="rounded-lg border border-base-300 bg-base-100 p-8 text-center">
          <h1 className="text-2xl font-bold">Login required</h1>

          <p className="mt-2 text-base-content/60">
            You need to sign in before you can access the dashboard.
          </p>

          <SignInButton mode="modal">
            <button type="button" className="btn btn-primary btn-sm mt-5">
              Sign in
            </button>
          </SignInButton>
        </section>
      </SignedOut>

      <SignedIn>{children}</SignedIn>
    </>
  );
}

export default ProtectedRoute;

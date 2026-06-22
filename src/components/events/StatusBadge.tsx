import type { Event } from "../../types/event";

type StatusBadgeProps = {
  status: Event["status"];
};

function StatusBadge({ status }: StatusBadgeProps) {
  const className =
    status === "published"
      ? "badge badge-success"
      : status === "draft"
        ? "badge badge-warning"
        : status === "cancelled"
          ? "badge badge-error"
          : "badge badge-neutral";

  return <span className={`${className} capitalize`}>{status}</span>;
}

export default StatusBadge;

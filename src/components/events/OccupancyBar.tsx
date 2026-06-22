import { calculateOccupancy } from "../../utils/eventHelpers";

type OccupancyBarProps = {
  attendeesCount: number;
  maxAttendees: number;
};

function OccupancyBar({ attendeesCount, maxAttendees }: OccupancyBarProps) {
  const occupancy = calculateOccupancy(attendeesCount, maxAttendees);

  return (
    <div className="rounded-md bg-base-200 p-3">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-base-content/60">Occupancy</span>

        <span className="font-medium">
          {attendeesCount} / {maxAttendees}
        </span>
      </div>

      <progress
        className="progress progress-primary h-2 w-full"
        value={occupancy}
        max={100}
      />

      <p className="mt-1 text-right text-xs text-base-content/55">
        {occupancy}%
      </p>
    </div>
  );
}

export default OccupancyBar;

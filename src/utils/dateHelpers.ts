export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function isUpcomingDate(date: string) {
  const today = new Date().toISOString().split("T")[0];

  return date >= today;
}

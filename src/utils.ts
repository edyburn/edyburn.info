/** Format a date string for display as MMM YYYY, e.g. Jan 2024 */
export function formatShortDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(dateString));
}

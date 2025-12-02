/**
 * Returns a human-readable time ago string (e.g., "2 hours ago")
 * @param date - The date to compare
 * @param now - The current date (default: new Date())
 * @returns A human-readable time ago string
 * @example
 * timeAgo(new Date(Date.now() - 3600000)) // '1 hour ago'
 * timeAgo(new Date(Date.now() - 86400000)) // '1 day ago'
 */
export function timeAgo(date: Date | string | number, now: Date = new Date()): string {
  const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];
  
  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }
  
  return 'just now';
}


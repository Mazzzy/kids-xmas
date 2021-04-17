// convert timestamp to date
export function getDate(timestamp: Date): string {
  const ts = new Date(timestamp);
  const date = ts.getDate();
  const month = ts.toLocaleString('en-us', { month: 'long' });
  const year = ts.getFullYear();
  const convertedDate = month + ' ' + date + ', ' + year;

  return convertedDate;
}

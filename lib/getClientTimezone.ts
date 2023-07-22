function getClientTimezone() {
  const dateTimeFormat = new Intl.DateTimeFormat();
  const { timeZone } = dateTimeFormat.resolvedOptions();
  return timeZone;
}

export default getClientTimezone;

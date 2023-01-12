export interface HistoryEvent {
  id: string,
  title: string,
  event_date_utc: string,
  event_date_unix: string,
  details: string,
  links: {
    article: string
  }
}

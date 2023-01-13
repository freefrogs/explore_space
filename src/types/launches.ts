enum Precision {
  Half = 'half',
  Quarter = 'quarter',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour'
}

interface Failure {
  time: number,
  altitude: number,
  reason: string
}

interface Fairings {
  reused: boolean,
  recovery_attempt: boolean,
  recovered: boolean,
  ships: string[]
}

interface Core {
  core: string,
  flight: number,
  gridfins: boolean,
  legs: boolean,
  reused: boolean,
  landing_attempt: boolean,
  landing_success: boolean,
  landing_type: string,
  landpad: string
}

interface LaunchesLinks {
  patch: {
    small: string,
    large: string
  },
  reddit: {
    campaign: string,
    launch: string,
    media: string,
    recovery: string
  }
  flickr: {
    small: string[],
    original: string[]
  },
  presskit: string,
  webcast: string,
  youtube_id: string,
  article: string,
  wikipedia: string
}

export interface Launch {
  id: string,
  flight_number: number,
  name: string,
  date_utc: string,
  date_unix: number,
  date_local: string,
  date_precision: Precision,
  static_fire_date_utc: string,
  static_fire_date_unix: string,
  tdb: boolean,
  nest: boolean,
  window: number,
  rocket: string,
  success: boolean,
  failures: Failure[],
  upcoming: boolean,
  details: string,
  fairings: Fairings,
  crew: string[],
  ships: string[],
  capsules: string[],
  payloads: string[],
  launchpad: string,
  cores: Core[],
  links: LaunchesLinks,
  auto_update: boolean
}

export interface LaunchesFiltersData {
  search: string,
  yearFrom: number,
  yearTo: number,
  isSuccess: 'both'|'success'|'failure',
  withCrew: 'both'|'with'|'without'
}

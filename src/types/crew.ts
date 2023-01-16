enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Retired = 'retired',
  Unknown = 'unknown'
}

export interface Crew {
  name: string,
  agency: string,
  image: string,
  wikipedia: string,
  launches: string[],
  status: Status,
  id: string
}

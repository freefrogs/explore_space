enum CapsuleStatus {
  Unknown = 'unknown',
  Active = 'active',
  Retired = 'retired',
  Destroyed = 'destroyed'
}

enum CapsuleType {
  Type1 = 'Dragon 1.0',
  Type2 = 'Dragon 1.1',
  Type3 = 'Dragon 2.0'
}

export interface Capsule {
  reuse_count: number,
  water_landings: number,
  land_landings: number,
  last_update: string,
  launches: string[],
  serial: string,
  status: CapsuleStatus,
  type: CapsuleType,
  id: string
}

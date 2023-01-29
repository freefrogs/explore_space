import type { LengthUnit, MassUnit, ForceUnit } from './common';

interface VolumeUnit {
  cubic_meters: number;
  cubic_feet: number;
}

interface HeatShield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

interface Trunk {
  trunk_volume: VolumeUnit;
  cargo: {
    solar_array: number;
    unpressurized_cargo: boolean;
  }
}

interface Thruster {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  isp: number;
  thrust: ForceUnit;
}

export interface Dragon {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  dry_mass_kg: number;
  dry_mass_lb: number;
  first_flight: string;
  heat_shield: HeatShield;
  thrusters: Thruster[];
  launch_payload_mass: MassUnit;
  launch_payload_vol: VolumeUnit;
  return_payload_mass: MassUnit;
  return_payload_vol: VolumeUnit;
  pressurized_capsule: {
    payload_volume: VolumeUnit;
  };
  trunk: Trunk;
  height_w_trunk: LengthUnit;
  diameter: LengthUnit;
  flickr_images: string[];
  wikipedia: string;
  description: string;
}

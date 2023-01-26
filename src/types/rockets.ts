interface LengthUnit {
  meters: number;
  feet: number;
}

interface MassUnit {
  kg: number;
  lb: number;
}

interface ForceUnit {
  kN: number;
  lbf: number;
}

interface Stage {
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
}

interface FirstStage extends Stage {
  thrust_sea_level: ForceUnit;
  thrust_vacuum: ForceUnit;
}

interface SecondStage extends Stage {
  thrust: ForceUnit;
  payloads: {
    option_1: string;
    composite_fairing: {
      height: LengthUnit;
      diameter: LengthUnit;
    };
  }
}

interface Engines {
  number: number;
  type: string;
  version: string;
  layout: string;
  isp: {
    sea_level: number;
    vacuum: number;
  };
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: ForceUnit;
  thrust_vacuum: ForceUnit;
  thrust_to_weight: number;
}

export interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: string;
  country: string;
  company: string;
  height: LengthUnit;
  diameter: LengthUnit;
  mass: MassUnit;
  payload_weights: object;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: {
    number: number;
    material: string;
  };
  flickr_images: string[];
  wikipedia: string;
  description: string;
}

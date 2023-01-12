interface Headquarters {
  address: string,
  city: string,
  state: string
}

export interface HistoryLinks {
  website: string,
  flickr: string,
  twitter: string,
  elon_twitter: string
}

export interface CompanyInfo {
  headquarters: Headquarters,
  links: HistoryLinks,
  name: string,
  founder: string,
  founded: number,
  employees: number,
  vehicles: number,
  launch_sites: number,
  test_sites: number,
  ceo: string,
  cto: string,
  coo: string,
  cto_propulsion: string,
  valuation: number,
  summary: string,
  id: string
}

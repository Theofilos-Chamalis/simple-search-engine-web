export enum ISpecialty {
  ELECTRICAL = 'Electrical',
  EXCAVATION = 'Excavation',
  PAINTING = 'Painting',
  PLUMBING = 'Plumbing',
}

export enum ICity {
  BERLIN = 'berlin',
  HAMBURG = 'hamburg',
  MUNICH = 'munich',
  FRANKFURT = 'frankfurt',
  STUTTGART = 'stuttgart',
}

export interface CompanyDTO {
  name: string;
  specialties: ISpecialty[];
  city: ICity;
  description: string;
  logo: string;
}

export interface ResponsePopulationApi {
  population: Population
}
export interface Population {
  person: Person[]
}

export interface Person {
  id: number
  name: string
  surname: Surname
  surname2: string
  sex: Sex
  'country-id': number
  phone: string
  datebirthday: Date
  lastModification: Date
}

export enum Sex {
  H = 'H',
  M = 'M'
}

export enum Surname {
  Constans = 'Constans',
  Pons = 'Pons',
  Sor = 'Sor'
}

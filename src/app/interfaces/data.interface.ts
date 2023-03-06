
export interface Data {
  sex:      RegularData[];
  language: RegularData[];
  country:  Country[];
}

export interface Country {
  id:          number;
  description: string;
  prefix:      number;
  language:    string;
}

export interface RegularData {
  id:          number;
  key:         string;
  description: string;
}

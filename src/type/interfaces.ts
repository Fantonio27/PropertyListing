export interface Content {
  capacity: {
    people: number;
    bedroom: number;
  };
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  superhost: boolean;
  location: string;
  image: string;
}

export type Filter = {
    All : boolean | string,
    "Norway": boolean | string,
    "Finland": boolean | string,
    "Sweden": boolean | string,
    "Switzerland": boolean | string, 
    "propertyType": number | boolean,
    "superhost": boolean | string
}

export type Cate = "All" | "Norway" | "Finland" | "Sweden" | "Switzerland" | "propertyType" | "superhost";

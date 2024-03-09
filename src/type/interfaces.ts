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
    All : boolean,
    Norway: boolean,
    Finland: boolean,
    Sweden: boolean,
    Switzerland: boolean, 
    propertyType: number | boolean,
    superhost: boolean
}

export type Cate = "All" | "Norway" | "Finland" | "Sweden" | "Switzerland" | "propertyType" | "superhost";

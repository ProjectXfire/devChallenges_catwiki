export type Breed = {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  image: Image;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
};

export type BreedDetail = {
  id: string;
  breeds: Breed[];
  url: string;
  height: number;
  width: number;
};

type Image = {
  id: string;
  url: string;
};

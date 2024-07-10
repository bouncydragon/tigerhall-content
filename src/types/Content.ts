export type TEdge = {
  name: string;
  length: number;
  image: TImage;
  experts?: TUser[];
  participants?: TUser[];
  categories: TCategories[];
  slug: string;
};

export type TUser = {
  firstName: string;
  lastName: string;
  company: string;
};

type TImage = {
  alt: string;
  uri: string;
};

type TCategories = {
  name: string;
};
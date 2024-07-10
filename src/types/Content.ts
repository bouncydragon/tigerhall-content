export type TEdge = {
  id: string;
  name: string;
  length: number;
  image: TImage;
  experts?: TUser[];
  participants?: TUser[];
};

export type TUser = {
  firstName: string;
  lastName: string;
  title: string;
  company: string;
};

export type TImage = {
  alt: string;
  uri: string;
  originalName: string;
};

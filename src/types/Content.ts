export type TEdge = {
  id: string;
  name: string;
  length: number;
  image: TImage;
  experts: TExpert[];
};

export type TExpert = {
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

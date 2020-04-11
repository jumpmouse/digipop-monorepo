export interface Project {
  id?: string;
  key?: string;
  link?: string;
  title?: string;
  description?: string;
  photoUrl?: string;
  sections?: SimpleLinkObject[];
}

export interface SimpleLinkObject {
  key: string;
  name: string;
  link: string;
  fragment?: string;
}

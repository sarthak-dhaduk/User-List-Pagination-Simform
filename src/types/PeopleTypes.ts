export type PeopleType = {
  active: boolean;
  avatar: string;
  createdAt: string;
  email: string;
  first_name: string;
  last_name: string;
  owner: boolean;
  removable: string;
  role: string;
  updatedAt: string;
  __v: 0;
  _id: string;
};

export type PeopleDataType = {
  message: string;
  currentPage: number;
  limit: number;
  totalPages: number;
  users: PeopleType[];
};

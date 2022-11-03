export type Book = {
  additional: string;
  author: string;
  city: string;
  contacts: string;
  country: string;
  id: number;
  isbn: string;
  latitude: number;
  longitude: number;
  title: string;
  year: number;
};

export type BookDto =  {
  additional?: string;
  author: string;
  city?: string;
  contacts?: string;
  country?: string;
  isbn?: string;
  latitude: number;
  longitude: number;
  title: string;
  year?: number;
}

export type User = {
  name: string;
  mail: string;
  city: string;
  contacts: string;
  country: string;
  id: number;
  latitude: number;
  longitude: number;
};

export type UserDto =  {
  name?: string;
  mail: string;
  city?: string;
  contacts?: string;
  country?: string;
  latitude: number;
  longitude: number;
};
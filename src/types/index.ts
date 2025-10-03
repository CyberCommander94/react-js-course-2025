export interface IRestaurant {
  id: string;
  name: string;
  menu: MenuItem[];
  reviews: ReviewsItem[];
};

export type MenuItem = {
  id: string;
  name: string;
  price: string | number;
  ingredients: string[];
};

export type ReviewsItem = {
  id: string;
  user: string;
  text: string;
  rating: string | number;
};

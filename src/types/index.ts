export interface IRestaurant {
  id: string;
  name: string;
  menu: IMenuItem[];
  reviews: IReviewsItem[];
}

export interface IMenuItem {
  id: string;
  name: string;
  price: string | number;
  ingredients: string[];
}

export interface IReviewsItem {
  id: string;
  user: string;
  text: string;
  rating: string | number;
}

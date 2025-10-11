import type { IReviewsItem } from '@/types';

type ReviewFormAction =
  | { type: 'SET_USER'; payload: string }
  | { type: 'SET_RATING'; payload: number }
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'RESET_FORM'; payload: Omit<IReviewsItem, 'id'> };

export const reviewFormReducer = (state: Omit<IReviewsItem, 'id'>, action: ReviewFormAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        user: payload,
      };
    case 'SET_RATING':
      return {
        ...state,
        rating: payload,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: payload,
      };
    case 'RESET_FORM':
      return {
        ...payload,
      };
    default:
      return state;
  }
};

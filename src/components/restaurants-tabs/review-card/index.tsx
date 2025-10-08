import type { IReviewsItem } from '@/types';
import type { FC } from 'react';
import styled from '@emotion/styled';
import { RatingStars } from '../rating-stars';

type Props = {
  review: IReviewsItem;
}

export const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle>{review.user}</CardTitle>
        <RatingStars rating={Number(review.rating)} />
      </CardHeader>
      <p>{review.text}</p>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};
  border-right: 4px solid ${(props) => props.theme.colors.roseBrownMedium};
  border-bottom: 1px solid ${(props) => props.theme.colors.roseBrownMedium};
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 300;
  gap: ${props => props.theme.spacing(3)};
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 0;
  font-size: 1.1rem;
`;

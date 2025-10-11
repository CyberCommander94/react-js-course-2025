import type { IReviewsItem } from '@/types';
import type { FC } from 'react';
import styled from '@emotion/styled';
import { RatingStars } from '@/components/pages/home/rating-stars';

type Props = {
  review: IReviewsItem;
};

export const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle>{review.user}</CardTitle>
        <RatingStars rating={Number(review.rating)} />
      </CardHeader>
      <p>{review.text}</p>
      <BottomBorder />
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing(1)};
  border-left: 4px solid ${(props) => props.theme.colors.goldenBrownDeep};
  border-right: 4px solid ${(props) => props.theme.colors.goldenBrownMedium};
  position: relative;
`;

const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 300;
  gap: ${(props) => props.theme.spacing(3)};
`;

const CardTitle = styled.p`
  font-weight: 600;
  margin: 0;
  font-size: 1.1rem;
`;

const BottomBorder = styled.hr`
  height: 1px;
  width: 100%;
  border: none;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.goldenBrownDeep},
    ${(props) => props.theme.colors.roseBrownDark},
    ${(props) => props.theme.colors.goldenBrownMedium}
  );
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
`;

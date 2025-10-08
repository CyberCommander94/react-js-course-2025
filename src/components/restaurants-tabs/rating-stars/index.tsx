import type { FC } from 'react';
import styled from '@emotion/styled';
import { Star } from 'lucide-react';

type Props = {
  rating: number;
  size?: number;
};

export const RatingStars: FC<Props> = ({ rating = 0, size = 20 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <StarsWrapper>
      {stars.map((filled, index) =>
        filled ? <FilledStar key={index} size={size} /> : <EmptyStar key={index} size={size} />,
      )}
    </StarsWrapper>
  );
};

const StarsWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing(1)};
  align-items: center;
`;

const FilledStar = styled(Star)`
  stroke: none;
  fill: ${(props) => props.theme.colors.warmBeigeLight};
  width: ${(props) => props.size ?? 20}px;
  height: ${(props) => props.size ?? 20}px;
`;

const EmptyStar = styled(Star)`
  stroke: ${(props) => props.theme.colors.coolGrayMedium};
  fill: none;
  width: ${(props) => props.size ?? 20}px;
  height: ${(props) => props.size ?? 20}px;
`;

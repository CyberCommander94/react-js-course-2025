import styled from '@emotion/styled';

import type { FC  } from "react";
import type { ReviewsItem } from "@/types";

type Props = {
  item: ReviewsItem;
};

const ReviewsItemCard: FC<Props> = ({ item }) => {
  return (
    <InfoCardItemWrapper>
      <TopRow>
        <p>{item.user}</p>
        <p>{item.rating}</p>
      </TopRow>
      <p>{item.text}</p>
    </InfoCardItemWrapper>
  );
}

export default ReviewsItemCard;

const InfoCardItemWrapper = styled.article`
  width: 100%;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 4px 12px;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

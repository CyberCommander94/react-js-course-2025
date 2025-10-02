import styled from '@emotion/styled';

import type { FC  } from "react";
import type { MenuItem } from "@/types";

type Props = {
  item: MenuItem;
};

const MenuItemCard: FC<Props> = ({ item }) => {
  return (
    <InfoCardItemWrapper>
      <TopRow>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </TopRow>
      <p>{item.ingredients.join(', ')}</p>
    </InfoCardItemWrapper>
  );
}

export default MenuItemCard;

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

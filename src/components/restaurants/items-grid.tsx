import styled from '@emotion/styled';

import type { FC } from "react";
import type { IRestaurant } from "@/types";

import ListItem from '@/components/restaurants/grid-item';

type Props = {
  items: IRestaurant[];
}

const ItemsGrid: FC<Props> = ({ items }) => {
  const itemsElements = items.map((el) => (<ListItem item={el} />))

  return (
    <GridWrapper>
      {itemsElements}
    </GridWrapper>
  );
}

export default ItemsGrid;

const GridWrapper = styled.section`
  width: 100%;
  display: grid;
  padding: 20px 30px;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 10px;
`;

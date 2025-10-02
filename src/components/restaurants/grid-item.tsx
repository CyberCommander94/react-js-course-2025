import styled from '@emotion/styled';

import type { FC  } from "react";
import type { IRestaurant } from "@/types";
import MenuItemCard from '@/components/restaurants/menu-item-card';
import ReviewsItemCard from '@/components/restaurants/reviews-item-card';

type Props = {
  item: IRestaurant;
}

const ListItem: FC<Props> = ({ item }) => {
  return (
    <ItemWrapper>
      <h2>{item.name}</h2>
      <h3>Меню</h3>
      <InfoItemsGrid>
        {item.menu.length ? item.menu.map((el) => (<MenuItemCard item={el}/>)) : "Нет информации о блюдах их меню"}
      </InfoItemsGrid>
      <h3>Отзывы</h3>
      <InfoItemsGrid>
        {item.reviews.length ? item.reviews.map((el) => (<ReviewsItemCard item={el}/>)) : "Пока нет отзывов от посетителей"}
      </InfoItemsGrid>
    </ItemWrapper>
  );
}

export default ListItem;

const ItemWrapper = styled.article`
  width: 100%;
  height: max-content;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 4px 12px;
  box-sizing: border-box;
`;

const InfoItemsGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 20px 30px;
  box-sizing: border-box;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: 10px;
`;

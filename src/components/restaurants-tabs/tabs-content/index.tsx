import type { IRestaurant } from '@/types';
import type { FC } from 'react';
import { RestaurantDataGrid } from '../restaurant-data-grid';
import { MenuItemCard } from '@/components/restaurants-tabs/menu-item-card';
import { ReviewCard } from '@/components/restaurants-tabs/review-card';
import styled from '@emotion/styled';

type Props = {
  restaurant: IRestaurant;
};

export const TabsContent: FC<Props> = ({ restaurant }) => {
  return (
    <div>
      <RestaurantName>{restaurant.name}</RestaurantName>
      <SectionTitle>Menu</SectionTitle>
      {restaurant?.menu?.length ? (
        <RestaurantDataGrid>
          {restaurant.menu.map((menuItem) => (
            <MenuItemCard menuItem={menuItem} key={menuItem.id} />
          ))}
        </RestaurantDataGrid>
      ) : (
        <NoContentMessage>Menu is empty</NoContentMessage>
      )}
      <SectionTitle>Reiews</SectionTitle>
      {restaurant?.reviews?.length ? (
        <RestaurantDataGrid>
          {restaurant.reviews.map((review) => (
            <ReviewCard review={review} key={review.id} />
          ))}
        </RestaurantDataGrid>
      ) : (
        <NoContentMessage>No reviews</NoContentMessage>
      )}
    </div>
  );
};

const RestaurantName = styled.h2`
  margin: ${(props) => props.theme.spacing(5)} 0;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.roseBrownMedium};
  padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(4)};
  border-top: 1px solid ${(props) => props.theme.colors.roseBrownMedium};
  border-left: 4px solid ${(props) => props.theme.colors.roseBrownMedium};
`;

const SectionTitle = styled.h3`
  background-color: ${(props) => props.theme.colors.roseBrownMedium};
  margin: ${(props) => props.theme.spacing(1)} 0;
  font-weight: 400;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(4)};
`;

const NoContentMessage = styled.p`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  margin: ${(props) => props.theme.spacing(10)} 0;
`;

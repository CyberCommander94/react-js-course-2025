import type { IRestaurant } from '@/types';
import { useState, type FC } from 'react';
import { RestaurantDataGrid } from '../../restaurant-data-grid';
import { MenuItemCard } from '@/components/pages/home/menu-item-card';
import { ReviewCard } from '@/components/pages/home/review-card';
import { ReviewForm } from '@/components/pages/home/review-form';
import styled from '@emotion/styled';
import { CommonButton } from '@/components/common/button';
import { PlusIcon, X } from 'lucide-react';

type Props = {
  restaurant: IRestaurant;
};

export const TabsContent: FC<Props> = ({ restaurant }) => {
  const [isAddReviewFormVisible, setIsAddReviewFormVisible] = useState<boolean>(false);

  return (
    <div>
      <RestaurantName>
        <TopBorder />
        {restaurant.name}
      </RestaurantName>
      <SectionHeader>
        <SectionTitle>Menu</SectionTitle>
        <div />
      </SectionHeader>
      {restaurant?.menu?.length ? (
        <RestaurantDataGrid>
          {restaurant.menu.map((menuItem) => (
            <MenuItemCard menuItem={menuItem} key={menuItem.id} />
          ))}
        </RestaurantDataGrid>
      ) : (
        <NoContentMessage>Menu is empty</NoContentMessage>
      )}
      <SectionHeader>
        <SectionTitle>Reiews</SectionTitle>
        <CommonButton
          onClick={() => setIsAddReviewFormVisible(!isAddReviewFormVisible)}
          isTransparent
        >
          {!isAddReviewFormVisible ? (
            <PlusIcon strokeWidth={2} size={14} />
          ) : (
            <X strokeWidth={2} size={14} />
          )}
        </CommonButton>
      </SectionHeader>
      {isAddReviewFormVisible && (
        <ReviewForm closeFormHandler={() => setIsAddReviewFormVisible(!isAddReviewFormVisible)} />
      )}
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

const RestaurantName = styled.div`
  margin: ${(props) => props.theme.spacing(5)} 0 0 0;
  font-weight: 800;
  font-size: 1.5rem;
  padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(4)};
  border-left: 4px solid ${(props) => props.theme.colors.goldenBrownDeep};
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${(props) => props.theme.spacing(2)};
  margin-top: ${(props) => props.theme.spacing(8)};
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.goldenBrownDeep},
    ${(props) => props.theme.colors.roseBrownDark},
    ${(props) => props.theme.colors.goldenBrownMedium}
  );
`;

const SectionTitle = styled.h3`
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

const TopBorder = styled.hr`
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
  top: 0;
  left: 0;
  margin: 0;
`;

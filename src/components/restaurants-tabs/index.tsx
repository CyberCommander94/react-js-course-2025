import { useState, type FC } from 'react';
import styled from '@emotion/styled';
import { TabsContent } from '@/components/restaurants-tabs/tabs-content';
import type { IRestaurant } from '@/types';
import { TabButton } from '@/components/restaurants-tabs/tab-button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';


type Props = {
  restaurants: IRestaurant[];
};

export const RestaurantsTabs: FC<Props> = ({ restaurants }) => {
const [currentRestaurant, setCurrentRestaurant] = useState<IRestaurant | null>(restaurants?.[0] ?? null);

  const getActiveRestaurant = (id: string): IRestaurant | undefined => {
    return restaurants.find((restaurant) => restaurant.id == id);
  }

  const handleTabButtonClick = (id: string) => {
    const activeRestaurant = getActiveRestaurant(id);

    if (!activeRestaurant){
      return;
    }

    setCurrentRestaurant(activeRestaurant);
  };

  return (
    <>
      {currentRestaurant && <RestaursntsTabsContainer>
        <SwiperWrapper>
          <NavButton className="swiper-button-prev" />
          <SwiperElement
            modules={[FreeMode, Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            freeMode
            spaceBetween={4}
            slidesPerView="auto"
            style={{ width: '100%' }}
          >
            {restaurants?.map((restaurant) => (
              <SwiperSlide key={restaurant.id}>
                <TabButton
                  restaurant={restaurant}
                  isActive={currentRestaurant.id === restaurant.id}
                  onClick={handleTabButtonClick}
                />
              </SwiperSlide>
            ))}
          </SwiperElement>
          <NavButton className="swiper-button-next" />
        </SwiperWrapper>
        <TabsContent restaurant={currentRestaurant} key={currentRestaurant.id} />
      </RestaursntsTabsContainer>}
    </>
  );
}

const RestaursntsTabsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
`;

const SwiperWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  grid-template-rows: 1fr;
  gap: ${props => props.theme.spacing(3)};
  align-items: center;
`;

const SwiperElement = styled(Swiper)`
  width: 100%;

  .swiper-slide {
    width: auto !important;
  }
`;

const NavButton = styled.button`
  background: ${(props) => props.theme.colors.coolGrayMedium};
  border: none;
  cursor: pointer !important;
  font-size: 24px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  position: relative;


  &:hover:not(.swiper-button-disabled) {
    background: ${(props) => props.theme.colors.coolGrayDarker};
  }

  &.swiper-button-disabled {
    opacity: 0.3;
    cursor: default !important;
  }

  &.swiper-button-prev svg,
  &.swiper-button-next svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.colors.white};
  }

  &.swiper-button-prev svg {
    transform: rotate(180deg);
  }
`;

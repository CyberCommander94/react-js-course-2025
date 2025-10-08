import type { FC, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

export const RestaurantDataGrid: FC<PropsWithChildren> = ({ children }) => {
  return (
    <CardsGrid>
      {children}
    </CardsGrid>
  );
};

const CardsGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  gap: ${props => props.theme.spacing(4)};
`;

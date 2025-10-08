import styled from '@emotion/styled';
import { restaurants } from '@/db/index';
import { RestaurantsTabs } from '@/components/restaurants-tabs';
import type { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <PageContainer>
      <PageContent>
        <RestaurantsTabs restaurants={restaurants} />
      </PageContent>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const PageContent = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing(2)} ${(props) => props.theme.spacing(7)};
  max-width: 1500px;
  box-sizing: border-box;
`;

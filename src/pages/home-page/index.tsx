import styled from '@emotion/styled';
import { restaurants } from '@/db/index';
import { RestaurantsTabsGroup } from '@/components/pages/home/restaurants-tabs-group';
import type { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <PageContainer>
      <PageContent>
        {restaurants?.length ? (
          <RestaurantsTabsGroup restaurants={restaurants} />
        ) : (
          <NoContentMessage>
            <span>No restaurants to show</span>
          </NoContentMessage>
        )}
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

const NoContentMessage = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.spacing(10)} 0;
`;

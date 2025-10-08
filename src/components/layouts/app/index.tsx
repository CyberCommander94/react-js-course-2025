import { AppFooter } from '@/components/app-footer';
import { AppHeader } from '@/components/app-header';
import styled from '@emotion/styled';

import type { FC, PropsWithChildren } from "react";

export const AppLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <LayoutContainer>
      <AppHeader />
      <main>
        {children}
      </main>
      <AppFooter />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 50px;
`;

import { Outlet } from "react-router-dom";
import styled from '@emotion/styled';

export default function App() {
  return (
    <AppWrapper>
      <PagesContainer>
        <Outlet />
      </PagesContainer>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const PagesContainer = styled.main`
  width: 100%;
  height: 100%;
`;

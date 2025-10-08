import styled from '@emotion/styled';

import type { FC } from "react";

export const AppHeader: FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>CityRestaurants</Logo>
      </HeaderContent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderContent = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing(7)};
  max-width: 1500px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -1px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.goldenBrownMedium},
    ${props => props.theme.colors.roseBrownDark},
    ${props => props.theme.colors.goldenBrownDeep}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${props => props.theme.colors.transparent};
  text-transform: uppercase;
  user-select: none;
`;

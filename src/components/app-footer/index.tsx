import styled from '@emotion/styled';

import type { FC } from 'react';

const currentYear = new Date().getFullYear();

export const AppFooter: FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>CityRestaurants</Logo>
        <Copyright>© {currentYear}, CityRestaurants, All right reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterContent = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(7)};
  max-width: 1500px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -1px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.goldenBrownMedium},
    ${(props) => props.theme.colors.roseBrownDark},
    ${(props) => props.theme.colors.goldenBrownDeep}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${(props) => props.theme.colors.transparent};
  text-transform: uppercase;
  user-select: none;
`;

const Copyright = styled.div`
  font-size: 0.8rem;
`;

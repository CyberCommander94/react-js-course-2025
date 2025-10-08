import { Global, css, useTheme } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          overflow-x: hidden;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.1;
          color: ${theme.colors.coolGrayDeep};
          min-width: 100vw;
          min-height: 100vh;
          position: relative;
          background: linear-gradient(
            to bottom right,
            ${theme.colors.roseBrownLightest},
            ${theme.colors.coolGrayLightest}
          );
          background-repeat: no-repeat;
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
};

import { Global, css, useTheme } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          overflow-x: hidden;
          height: 100%;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 1.1;
          color: ${theme.colors.coolGrayDeep};
          height: 100%;
          width: 100%;
          position: relative;
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: ${theme.colors.coolGrayLightest};
          background-repeat: no-repeat;
          background-size: cover;
        }

        #root {
          width: 100%;
          height: 100%;
        }
      `}
    />
  );
};

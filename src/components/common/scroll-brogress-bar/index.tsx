import { useEffect, useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { useThrottle } from '@/hooks/useThrottle';
import { useDebounce } from '@/hooks/useDebounce';

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = useCallback(() => {
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    if (!header || !main || !footer) return;

    const scrollTop = window.scrollY;
    const scrollableHeight =
      header.scrollHeight + main.scrollHeight + footer.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 100;
    setScrollProgress(progress > 100 ? 100 : progress);
  }, []);

  const throttledScroll = useThrottle(calculateScrollProgress, 100);

  const handleScrollEnd = useDebounce(calculateScrollProgress, 150);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    window.addEventListener('scroll', throttledScroll);
    window.addEventListener('scroll', handleScrollEnd);
    window.addEventListener('resize', throttledScroll);

    const resizeObserver = new ResizeObserver(() => calculateScrollProgress());
    resizeObserver.observe(main);

    calculateScrollProgress();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('scroll', handleScrollEnd);
      window.removeEventListener('resize', throttledScroll);
      resizeObserver.disconnect();
    };
  }, [throttledScroll, handleScrollEnd, calculateScrollProgress]);
  return <ProgressBar style={{ width: `${scrollProgress}%` }} />;
};

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.goldenBrownDeep},
    ${(props) => props.theme.colors.roseBrownDark},
    ${(props) => props.theme.colors.goldenBrownMedium}
  );
  z-index: 9999;
  transition: width 0.25s ease-out;
`;

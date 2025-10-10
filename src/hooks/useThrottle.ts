import { useRef } from 'react';

export const useThrottle = <T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  const lastCall = useRef(0);

  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback(...args);
    }
  };
};

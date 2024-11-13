import { useState, useEffect } from 'react';

interface UseScrollOptions {
  threshold?: number;
}

export function useScroll({ threshold = 20 }: UseScrollOptions = {}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercent = (currentScroll / scrollHeight) * 100;

      setIsVisible(scrollPercent < threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return isVisible;
}

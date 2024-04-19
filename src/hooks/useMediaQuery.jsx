import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [matches, setMatches] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 960px)');
    if (media.matches) {
      setMatches(media.matches);
      setIsDesktop(media.matches);
    } else {
      setMatches(media.matches);
      setIsMobile(!media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches]);

  return { isMobile, isDesktop };
};

export default useMediaQuery;

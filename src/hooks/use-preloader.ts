import { useState, useEffect } from 'react';

export const usePreloader = (minLoadTime: number = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Add a small delay for fade-out animation
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, minLoadTime);

    // Also listen for when the page is actually loaded
    const handleLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, Math.max(minLoadTime - (Date.now() - performance.timing.navigationStart), 0));
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, [minLoadTime]);

  return { isLoading, fadeOut };
};

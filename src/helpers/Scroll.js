import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = ({ offset = 0 }) => {
  const location = useLocation();

  useEffect(() => {
    const scrollToElement = () => {
      if (location.hash) {
        const targetElement = document.querySelector(location.hash);
        if (targetElement) {
          const topOffset =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: topOffset - offset, behavior: 'smooth' });
          window.history.replaceState(null, '', location.pathname);
        } else {
          console.warn(`Елемент з хешем "${location.hash}" не знайдено`);
        }
      }
    };

    scrollToElement();
  }, [location, offset]);

  return null;
};

export default ScrollToHash;

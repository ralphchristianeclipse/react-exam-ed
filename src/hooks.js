import { useState, useEffect } from 'react';
import { useToggle } from 'react-use';

export const useToggleValue = (key = 'id', initial = null) => {
  const [currentItem, setCurrentItem] = useState(initial);
  const handleItem = item => {
    const isCurrent = currentItem && item && currentItem[key] === item[key];
    if (isCurrent) return setCurrentItem(null);
    setCurrentItem(item);
  };
  return [currentItem, handleItem];
};

export const useToggleTimeout = (delay = 1000, initial = true) => {
  const [on, toggle] = useToggle(initial);
  useEffect(() => {
    const timeout = setInterval(() => {
      toggle();
    }, delay);
    return () => clearInterval(timeout);
  }, []);
  return on;
};

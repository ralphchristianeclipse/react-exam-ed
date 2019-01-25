import { useState } from 'react';

export const useToggleValue = (key = 'id', initial = null) => {
  const [currentItem, setCurrentItem] = useState(initial);
  const handleItem = item => {
    const isCurrent = currentItem && item && currentItem[key] === item[key];
    if (isCurrent) return setCurrentItem(null);
    setCurrentItem(item);
  };
  return [currentItem, handleItem];
};

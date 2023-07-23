import { useState, useEffect } from 'react';

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
export default function useLocalStorage<T>(
  key: string,
  defaultValue: T | undefined,
): [T, SetState<T>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    const rawValue = JSON.stringify(value);
    localStorage.setItem(key, rawValue);
  }, [key, value]);

  return [value, setValue];
}

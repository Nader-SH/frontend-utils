import { useState } from 'react';
import { getLocal } from '../storage/getLocal';
import { setLocal } from '../storage/setLocal';

/**
 * Hook for managing localStorage with React state synchronization
 * @param key - The localStorage key
 * @param initialValue - The initial value if key doesn't exist
 * @returns A tuple with the value and setter function
 * @example
 * const [user, setUser] = useLocalStorage('user', { name: 'Guest' });
 * setUser({ name: 'John' }); // updates both state and localStorage
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = getLocal<T>(key);
      return item !== undefined ? item : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      setLocal(key, valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}


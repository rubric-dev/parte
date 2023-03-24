import { useRef, useEffect } from 'react';

export default function usePrevious<T>(value: T, initialValue: T) {
  const ref = useRef(initialValue);

  // Store current value in ref, only update if the value changes
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

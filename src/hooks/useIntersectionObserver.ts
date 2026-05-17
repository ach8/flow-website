import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverArgs {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends Element = HTMLDivElement>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  triggerOnce = false,
}: UseIntersectionObserverArgs = {}): [RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    
    if (!node || frozen.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (isElementIntersecting && triggerOnce) {
          frozen.current = true;
          observer.unobserve(node);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [root, rootMargin, threshold, triggerOnce]);

  return [ref, isIntersecting];
}

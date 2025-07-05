import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  threshold = 0.1,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isIntersecting] as const;
};

export const useScrollAnimation = () => {
  const [ref, isIntersecting] = useIntersectionObserver(0.1, '0px 0px -10% 0px');
  
  return {
    ref,
    className: isIntersecting ? 'animate-slide-up' : 'opacity-0 translate-y-8'
  };
};

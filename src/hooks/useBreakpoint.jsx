import { useEffect, useState } from 'react';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setBreakpoint(getBreakpoint(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
}

function getBreakpoint(width) {
  if (width < 480) {
    return 'xs';
  } else if (width < 640) {
    return 'sm';
  } else if (width < 1024) {
    return 'md';
  } else if (width < 1280) {
    return 'lg';
  } else {
    return 'xl';
  }
}

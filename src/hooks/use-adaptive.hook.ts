import { useCallback, useEffect, useState } from "react";

export function useAdaptive(maxWidth: string) {
  const [isMatch, setIsMatch] = useState(false);

  const mediaQueryChange = useCallback((event: MediaQueryList | MediaQueryListEvent) => {
    setIsMatch(event.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${maxWidth})`);

    mediaQuery.addEventListener("change", mediaQueryChange);
    mediaQueryChange(mediaQuery);

    return () => mediaQuery.removeEventListener("change", mediaQueryChange);
  }, [maxWidth, mediaQueryChange]);

  return isMatch;
}

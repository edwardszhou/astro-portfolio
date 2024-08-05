import { useEffect, useState } from "react";

export default function useMediaQuery(query: string): boolean {
  // if DOM window is not undefined, return media query
  const getMatches = (query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // redo query on initial client load and query change
    handleChange();

    if (matchMedia.addListener) matchMedia.addListener(handleChange);
    else matchMedia.addEventListener("change", handleChange);

    return () => {
      if (matchMedia.removeListener) matchMedia.removeListener;
      else matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}

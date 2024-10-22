import { useState, useEffect } from "react";

// Define breakpoints inside the hook file
const breakpoints = {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    desktop: "(min-width: 1024px)",
    largeDesktop: "(min-width: 1440px)",
};

// Hook to detect if a preset or custom media query matches
const useMediaQuery = (keyOrQuery: keyof typeof breakpoints | string): boolean => {
    const query = typeof keyOrQuery === "string" && keyOrQuery in breakpoints
        ? breakpoints[keyOrQuery as keyof typeof breakpoints] // Use the preset if available
        : keyOrQuery; // If it's a custom media query, use it directly

    const [matches, setMatches] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        const handleChange = (event: MediaQueryListEvent) => {
            setMatches(event.matches);
        };

        mediaQueryList.addEventListener("change", handleChange);

        return () => {
            mediaQueryList.removeEventListener("change", handleChange);
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;

import React, { useEffect, useState } from "react";

const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const controller = new AbortController();
    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener(
      "change",
      (e) => {
        setIsDarkMode(e.matches);
      },
      { signal: controller.signal }
    );

    return () => {
      controller.abort();
    };
  });

  return isDarkMode;
};

export default useIsDarkMode;

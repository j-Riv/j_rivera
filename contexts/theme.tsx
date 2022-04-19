import { createContext, useState, useMemo } from "react";

interface DefaultContext {
  theme: string;
  setTheme: (theme: string) => void;
}

let defaultTheme = "light";
if (typeof window !== "undefined") {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    defaultTheme = "dark";
  }
}

const defaultContext: DefaultContext = {
  theme: defaultTheme,
  setTheme: (theme: string) => {},
};

export const ThemeContext = createContext(defaultContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<string>(defaultTheme);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

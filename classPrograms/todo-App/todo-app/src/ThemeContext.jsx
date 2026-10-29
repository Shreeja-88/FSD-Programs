import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#222",
        minHeight: "100vh",
        padding: "20px"
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
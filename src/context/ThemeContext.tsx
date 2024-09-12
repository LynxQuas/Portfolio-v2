import { createContext, useContext, useEffect, useState } from "react";

// interace and types for this context.
interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}

interface Props {
    children: React.ReactNode;
}

// context.
const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleTheme: () => {},
});

export default function ThemeContextProvider({ children }: Props) {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    };

    // directly mutating the DOM.
    useEffect(() => {
        document.body.style.backgroundColor = isDark ? "#111827" : "#eee";
        document.body.style.color = isDark ? "white" : "black";
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider.");
    }

    return context;
}

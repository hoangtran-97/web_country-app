import React, { useState } from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#dbfac5",
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
    },
};

export type ContextChildrenProps = {
    children: React.ReactNode;
};

const innitialState = {
    theme: themes.light,
    switchTheme: () => {},
};
export const ThemeContext = React.createContext(innitialState);

export const ThemeProvider = ({ children }: ContextChildrenProps) => {
    const [theme, setTheme] = useState(themes.light);
    const switchTheme = () => {
        setTheme(prevState => {
            if (prevState === themes.light) {
                return themes.dark;
            } else {
                return themes.light;
            }
        });
    };
    const value = { theme, switchTheme };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

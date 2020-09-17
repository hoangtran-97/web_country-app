import React, { useState } from "react";

export type ThemeContextProps = {
    theme?: { foreground: string };
    switchTheme: Function;
};
export type ContextProps = {
    children: React.ReactNode;
};
export type ThemeProps = {
    light: { foreground: string };
    dark: { foreground: string };
};
export const themes: ThemeProps = {
    light: { foreground: "#000000" },
    dark: { foreground: "#000000" },
};

const innitialState: ThemeContextProps = {
    theme: themes.light,
    switchTheme: () => {},
};
export const ThemeContext = React.createContext(innitialState);

function ThemeProvider({ children }: ContextProps) {
    const [myTheme, setMyTheme] = useState(themes.light);
    const switchTheme = () => {
        setMyTheme(prevState => {
            if (prevState === themes.light) {
                return themes.dark;
            } else {
                return themes.light;
            }
        });
    };
    const value = { myTheme, switchTheme };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
export default ThemeProvider;

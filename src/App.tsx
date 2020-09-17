import React from "react";

import { ThemeProvider } from "./context";
import Routes from "./Routes";

export default function App() {
    return (
        <ThemeProvider>
            <Routes />
        </ThemeProvider>
    );
}

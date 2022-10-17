import React, { useState } from 'react';

const ThemeContext = React.createContext(null);

export const ThemeContextProviver = (props) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (e) => {
        e.preventDefault();
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return(
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};
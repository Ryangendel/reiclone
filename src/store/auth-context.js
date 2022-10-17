import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},

});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=> {
        const storedUserLoggedInformation = localStorage.getItem("isLoggedIn");

        if (storedUserLoggedInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(true);
    };

    const loginHandler = () => {
        console.log("INSIDE LOGIN HANDELER")
        // localStorage.removeItem('isLoggedIn');
        // setIsLoggedIn(true);
    };

    return ( 
        <AuthContext.Provider
            value= {{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>

    );
};

export default AuthContextProvider;
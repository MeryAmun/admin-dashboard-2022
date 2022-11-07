import React, { createContext, useContext, useState } from 'react';


//const ContextProvider = useContext();
const StateContext = createContext();
const initialState = {
    chat:false,
    cart:false,
    notification:false,
    userProfile:false,
}



export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Dark');
    const [themeSettings, setThemeSettings] = useState(false)
 

    const setMode = (e) => {
setCurrentMode(e.target.value);
localStorage.setItem('themeMode', e.target.value);
setThemeSettings(false)
    };

    const setColor = (color) => {
   setCurrentColor(color);
   localStorage.setItem('themeColor', color);
   setThemeSettings(false)
    };

    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]:true})
    }
    return (
        <StateContext.Provider 
        value={{activeMenu,
         setActiveMenu,
         isClicked,
         setIsClicked,
         handleClick,
         screenSize,
         setScreenSize,
         setColor,
         setMode,
         currentColor,
         currentMode,
         setCurrentColor,
         setCurrentMode,
         themeSettings,
          setThemeSettings
         }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
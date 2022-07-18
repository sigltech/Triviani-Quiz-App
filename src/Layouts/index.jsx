import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { DarkModeToggle } from "../components";
import './style.css';

export default function Layout() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    
    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        
    }
    
    if (!isDarkMode) {
        const background = document.querySelector(".area");
        background.classList.add("darkmode-active");
    } else {
        const background = document.querySelector(".area");
        background.classList.remove("darkmode-active");
    }

    return (
        <>
            <DarkModeToggle handleDarkMode={handleDarkMode} />
            <div className="area" >
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
            </div >
            <Outlet />
        </>
    )
}

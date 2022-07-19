import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { DarkModeToggle } from "../components";
import './style.css';

export default function Layout() {

    // const [isDarkMode, setIsDarkMode] = useState(false);
    // const checkBox = document.getElementById('checkBox');
    
    const handleDarkMode = (e) => {
        const background = document.querySelector(".motion-background");
        if (e.target.checked) {
            background.classList.toggle("darkmode-active");
        } else {
            background.classList.toggle("darkmode-active");
        }
        // setIsDarkMode(!isDarkMode);
        
    }
    
    

    return (
        <>
            <DarkModeToggle handleDarkMode={handleDarkMode} />
            <div className="motion-background" >
                <ul className="moving-elements">
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

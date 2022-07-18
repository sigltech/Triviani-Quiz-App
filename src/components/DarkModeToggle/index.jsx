import React from "react";

export default function DarkModeToggle({handleDarkMode}) {

    return (
        <div className="darkModeToggle">
            <label className="switch">
            <input onClick={handleDarkMode} type="checkbox" />
            <span className="slider round"></span>
            </label>
        </div>
    );
}

import React from "react";

export default function DarkModeToggle({ handleDarkMode }) {
  return (
    <div className="darkModeToggle">
      <label className="switch">
        <input
          role="darkmode"
          id="checkbox"
          onChange={handleDarkMode}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

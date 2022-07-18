import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div class="area" >
                <ul class="circles">
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

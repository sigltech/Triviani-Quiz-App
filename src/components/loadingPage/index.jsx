import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeCircles } from  'react-loader-spinner'

function LoadingPage() {
    return(
        <>
            <ThreeCircles
                color="blue"
                height={110}
                width={110}
                ariaLabel="three-circles-rotating"
            />
        </>
    )
}

export default LoadingPage

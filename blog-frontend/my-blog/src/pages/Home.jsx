import React from "react";
import background from "../assets/background.jpg"

export default function Home (){
    const backgroundimg = {
        height: "100vh",
        width: "150vh",
        backgroundImage : `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    };
    return (
        <div>
            <h1>
                Welcome to Fluffy's Blog
            </h1>
            <p>Helllooooooooo</p>
            <p style={backgroundimg}></p>
        </div>
    );
}

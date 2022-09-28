import React from "react";
import { Routes, Route } from "react-router-dom";
import Lockscreen from "./lockscreen";
import Login from "./login";


const Gateway = () => {

    let component;
    if(window.localStorage.lockscreenPassed){
        component = (
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        )
    }else{
        component = <Lockscreen/>;
    }

    return (
        <div className="gateway-container">
            {component}
        </div>
    )
}


export default Gateway;
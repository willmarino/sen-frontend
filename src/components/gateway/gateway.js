import React from "react";
import { Routes, Route } from "react-router-dom";
import withNav from "../common/with_nav";
import Lockscreen from "./lockscreen";
import Login from "./login";
import Register from "./register";



const Gateway = () => {
    return (
        <div className="gateway-container">
            <Routes>
                <Route path="/lockscreen" element={<Lockscreen/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </div>
    )
}


export default withNav(Gateway);
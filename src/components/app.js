import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./user/home";
import Gateway from "./gateway/gateway";



const App = () => {
    return (
        <div className="app-container">
            <Routes>
                {/* <Route path="*" element={<Gateway/>}/> */}
                <Route path="*" element={<Navigate to="/gateway/lockscreen"/>}/>
                <Route path="/gateway/*" element={<Gateway/>}/>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );

}


export default App;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./user/main";
import Gateway from "./gateway/gateway";



const App = () => {
    return (
        <div className="app-container">
            <Routes>
                <Route path="*" element={<Navigate to="/gateway/lockscreen"/>}/>
                <Route path="/gateway/*" element={<Gateway/>}/>
                <Route path="/main/*" element={<Main/>}/>
            </Routes>
        </div>
    );

}


export default App;
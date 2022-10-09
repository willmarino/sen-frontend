import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import UserHeader from "./user_header";
import ViewAlerts from "./alerts/view_alerts"
import AddAlert from "./alerts/add_alert";


const Main = () => {
    if(!localStorage.getItem("userJWT")){
        return <Navigate to="/gateway/login" />
    }else{
        return (
            <div className="main-container">
                <UserHeader/>
                <div className="user-body">
                    <Routes>
                        <Route path="/alerts" element={<ViewAlerts/>}/>
                        <Route path="/add_alert" element={<AddAlert/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}


export default Main;
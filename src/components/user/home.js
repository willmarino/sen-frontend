import React from "react";
import { Navigate } from "react-router-dom";
import withNav from "../common/with_nav";


const Home = (props) => {
    
    const onClick = () => {
        localStorage.removeItem("userJWT");
        props.navigate("/login");
    }

    if(!localStorage.getItem("userJWT")){
        return <Navigate to="/gateway/login" />
    }else{
        return (
            <div>
                <p>home</p>
                <p onClick={onClick}>logout</p>
            </div>
        );
    }
}


export default withNav(Home);
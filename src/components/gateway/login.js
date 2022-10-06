import React from "react";
import { Navigate, Link } from "react-router-dom";
import withNav from "../common/with_nav";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){

    }


    render(){
        if(!localStorage.getItem("lockscreenPassed")){
            return <Navigate to="/gateway/lockscreen"/>
        }else if(localStorage.getItem("userJWT")){
            return <Navigate to="/home"/>
        }else{
            return (
                <div className="login-form-container">
                    <Link to={"/gateway/register"}>Register</Link>
                    <form className="login-form">
                        <input type=""/>
                    </form>
                </div>
            )
        }
    }
}

export default withNav(Login);
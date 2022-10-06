import React from "react";
import { Navigate } from "react-router";
import withNav from "../common/with_nav";


class Lockscreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
            passwordError: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    handleSubmit(){
        if(this.state.password === "abc"){
            window.localStorage.setItem("lockscreenPassed", true);
            this.props.navigate("/login");
        }else{
            this.setState({ passwordError: "Incorrect Password" });
        }
    }


    onChange(stateKey){
        return (e) => {
            this.setState({ [stateKey]: e.currentTarget.value });
        }
    }


    render(){
        if(localStorage.getItem("lockscreenPassed")){
            return <Navigate to="/gateway/login"/>
        }else if(localStorage.getItem("userJWT")){
            return <Navigate to="/home"/>
        }else{
            return (
                <div className="lockscreen-form-container">
                    <p className="header">Enter the passcode</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter Passphrase" value={this.state.password} onChange={this.onChange("password")}></input>
                        <input type="submit"></input>
                    </form>
                </div>
            )
        }
    }
}

export default withNav(Lockscreen);
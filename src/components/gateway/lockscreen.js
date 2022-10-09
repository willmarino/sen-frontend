import React from "react";
import { Navigate } from "react-router";
import withNav from "../common/with_nav";


class Lockscreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
            passwordError: "",
            passwordInputClassName: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        if(this.state.password === "abc"){
            window.localStorage.setItem("lockscreenPassed", true);
            this.props.navigate("/login");
        }else{
            this.setState({
                passwordError: "Incorrect Password",
                passwordInputClassName: "error"
            }, () => {
                setTimeout(() => {
                    this.setState({
                        passwordInputClassName: "error-out"
                    })
                }, 1000)
            });
        }
    }


    onChange(stateKey){
        return (e) => {
            this.setState({ [stateKey]: e.currentTarget.value });
        }
    }


    render(){
        if(localStorage.getItem("lockscreenPassed")){
            return <Navigate to="/gateway/login"/>;
        }else if(localStorage.getItem("userJWT")){
            return <Navigate to="/main/alerts"/>;
        }else{
            return (
                <div className="lockscreen-form-container">
                    <p className="header">Enter the passcode</p>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            autoFocus
                            type="password"
                            placeholder="Enter Passphrase"
                            value={this.state.password}
                            onChange={this.onChange("password")}
                            className={this.state.passwordInputClassName}>
                        </input>
                        <input type="submit"></input>
                    </form>
                </div>
            )
        }
    }
}

export default withNav(Lockscreen);
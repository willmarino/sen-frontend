import React from "react";
import { Navigate } from "react-router-dom";
import { registerUser } from "../../utils/users";
import withNav from "../common/with_nav";


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    handleSubmit(e){
        e.preventDefault();
        registerUser(this.state)
            .then((response) => {
                console.log(response);
                if(this.state.errorMessage !== ""){
                    this.setState({ errorMessage: "" });
                }
                window.localStorage.setItem("userJWT", response.data);
                this.props.navigate("/home");
            })
            .catch((err) => {
                console.log(err);
                this.setState({ errorMessage: err.response.data.message });
            })
    }


    onChange(stateKey){
        return (e) => {
            this.setState({ [stateKey]: e.currentTarget.value });
        }
    }


    render(){
        if(!localStorage.getItem("lockscreenPassed")){
            return <Navigate to="/gateway/lockscreen"/>
        }else if(localStorage.getItem("userJWT")){
            return <Navigate to="/home"/>
        }else{
            return (
                <div className="register-form">
                    <p>Register</p>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange("email")}>
                        </input>
                        <input
                            type="text"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange("password")}>
                        </input>
                        <input type="submit"></input>
                        <p>{this.state.errorMessage}</p>
                    </form>
                </div>
            )
        }
    }
}

export default withNav(Register);
// export default Register;
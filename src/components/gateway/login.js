import React from "react";
import { Navigate, Link } from "react-router-dom";
import withNav from "../common/with_nav";
import { loginUser } from "../../utils/users";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const { email, password } = this.state;
        const validationErrorMessages = this.validateInputs();
        if(validationErrorMessages.length === 0){
            console.log("Validation passed");
            loginUser({ email, password })
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
                    if(err.response){
                        this.setState({ errorMessage: err.response.data.message });
                    }else{
                        this.setState({ errorMessage: err.message });
                    }
                })
        }else{
            console.log("Validation failed");
            this.setState({ errorMessage: validationErrorMessages[0] });
        }
    }

    onChange(stateKey){
        return (e) => {
            this.setState({ [stateKey]: e.currentTarget.value });
        }
    }


    validateInputs(){
        const emailErrors = this.validateEmail();
        const passwordErrors = this.validatePassword();
        return [ ...emailErrors, ...passwordErrors ];
    }

    validateEmail(){
        const { email } = this.state;
        const errors = [];
        if(!email.includes("@")){
            errors.push("Invalid email address");
        }else{
            if(!email.split("@")[1].includes("mail")){
                errors.push("Invalid email address");
            }
        }
        return errors;
    }

    validatePassword(){
        const { password } = this.state;
        const errors = [];
        if(password.length < 5){
            errors.push("Password length must be greater than 5");
        }
        return errors;
    }


    render(){
        if(!localStorage.getItem("lockscreenPassed")){
            return <Navigate to="/gateway/lockscreen"/>
        }else if(localStorage.getItem("userJWT")){
            return <Navigate to="/home"/>
        }else{
            return (
                <div className="login-form-container">
                    <p>Login!</p>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <input
                            autoFocus
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.onChange("email")}>
                        </input>
                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange("password")}>
                        </input>
                        <input type="submit"></input>
                        <p id="error-message">{this.state.errorMessage}</p>
                    </form>
                    <Link to={"/gateway/register"}>Sign up instead</Link>
                </div>
            )
        }
    }
}

export default withNav(Login);
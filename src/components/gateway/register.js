import React from "react";
import { Navigate, Link } from "react-router-dom";
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
        const { email, password } = this.state;
        registerUser({ email, password })
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
                <div className="register-form-container">
                    <p>Register!</p>
                    <form className="register-form" onSubmit={this.handleSubmit}>
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
                    <Link to={"/gateway/login"}>Go to login form here</Link>
                </div>
            )
        }
    }
}

export default withNav(Register);
// export default Register;
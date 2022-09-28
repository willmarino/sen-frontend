import React from "react";


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
        }
    }



    render(){
        return (
            <div className="login-form">
                <p>Login</p>
            </div>
        )
    }
}

export default Login;
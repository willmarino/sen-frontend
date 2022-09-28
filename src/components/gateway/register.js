import React from "react";


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
        }
    }



    render(){
        return (
            <div className="register-form">
                <p>Register</p>
            </div>
        )
    }
}

export default Register;
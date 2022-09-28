import React from "react";


class Lockscreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: "",
            passwordError: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }

    handleSubmit(){
        if(this.state.password === "abc"){
            window.localStorage.setItem("lockscreenPassed", true);
        }else{
            this.setState({ passwordError: "Incorrect Password" });
        }
    }

    onChangePassword(stateKey){
        return (e) => {
            this.setState({ [stateKey]: e.currentTarget.value });
        }
    }

    render(){
        return (
            <div className="lockscreen-form-container">
                <p className="header">Enter the passcode</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Passphrase" value={this.state.password} onChange={this.onChangePassword("password")}></input>
                    <input type="submit"></input>
                </form>
                <p></p>
            </div>
        )
    }
}

export default Lockscreen;
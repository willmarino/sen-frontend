import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Home from "./user/home";
import Gateway from "./gateway/gateway";



const App = () => {

    let component;
    if(window.localStorage.userData){
        component = <Home/>;
    }else{
        component = <Gateway/>;
    }

    return (
        <Router>
            <div className="app-container">
                {component}
            </div>
        </Router>
    );

}


export default App;
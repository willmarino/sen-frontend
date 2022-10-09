import React from "react";
import withNav from "../common/with_nav";

const UserHeader = (props) => {

    const onClick = () => {
        localStorage.removeItem("userJWT");
        props.navigate("/login");
    }

    return(
        <div className="user-header">
            <div id="email-display">
                <p>Emailstring@email.com</p>
            </div>
            <div onClick={onClick} id="logout-button">
                <p>Logout</p>
            </div>
        </div>
    )
}

export default withNav(UserHeader);
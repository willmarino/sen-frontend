import React from "react";


class ViewAlerts extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        const placeholderList = [];
        let i = 0;
        while(i < 30){
            placeholderList.push("placeholder");
            i += 1;
        }

        return(
            <div className="view-alerts">

                <div id="buttons">
                    <div className="button" id="num-alerts">
                        <p>0 alerts</p>
                    </div>
                    <div className="button" id="create-alerts">
                        <p>Create Alert</p>
                    </div>
                    <div className="button" id="sort">
                        <p>Sort By</p>
                    </div>

                </div>

                <ul className="alerts-list">
                    {placeholderList.map((p, idx) => {
                        return(
                            <li className="alerts-list-item" key={idx}>
                                <p>{p}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ViewAlerts;
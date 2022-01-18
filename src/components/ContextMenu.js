import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ContextMenu({left}) {
    let [xPos] = useState("0px");
    const [yPos] = useState("0px");
    useEffect(() => {
    }, [left]);
    return (
        <ul
            className="left-side-bar-right-context-menu"
            style={{
                top: yPos,
                left: xPos,
                position: "absolute",
                display: left ? 'block' : 'none'
            }}
        >
            <li>
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__icon"} icon={"user-plus"}/>
                Share list
            </li>
            <li>
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__icon"} icon={"copy"}/>
                Duplicate list
            </li>
            <li>
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__icon"} icon={"print"}/>
                Print list
            </li>
            <li className="left-side-bar-right-context-menu__delete-item"> Delete List</li>
        </ul>
    );
}

export default ContextMenu;



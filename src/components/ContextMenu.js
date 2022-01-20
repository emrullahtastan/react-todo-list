import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ContextMenu({left, xPos="0px", yPos="0px"}) {
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
            <li className="left-side-bar-right-context-menu__delete-item">
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__delete-item__icon"} icon={"trash-alt"}/>
                Delete List</li>
        </ul>
    );
}

export default ContextMenu;



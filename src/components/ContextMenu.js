import React, {useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {PromptContext, useContext} from "../contexts/PromptContext";

function ContextMenu({left, xPos = "0px", yPos = "0px", duplicate, deleteItem}) {

    const {prompt, setPrompt} = useContext(PromptContext);

    const openPrompt = (key) => {
        let obj = {...prompt};
        obj.visible = true;
        switch (key) {
            case "share":
                obj.header.title = "Share list";
                obj.body.component = "ShareInPrompt";
                obj.footer.visible = false;
                break;
            case "print":
                obj.header.title = "Print";
                obj.body.component = "PrintInPrompt";
                obj.footer.visible = true;
                break;
            default:
        }
        setPrompt(obj);
    }

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
            <li onClick={openPrompt.bind(this, 'share')}>
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__icon"} icon={"user-plus"}/>
                Share list
            </li>
            <li onClick={()=>{duplicate()}}>
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__icon"} icon={"copy"}/>
                Duplicate list
            </li>
            <li onClick={openPrompt.bind(this, 'print')}>
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__icon"} icon={"print"}/>
                Print list
            </li>
            <li onClick={()=>{deleteItem()}} className="left-side-bar-right-context-menu__delete-item">
                <FontAwesomeIcon className={"left-side-bar-right-context-menu__delete-item__icon"} icon={"trash-alt"}/>
                Delete List
            </li>
        </ul>
    );
}

export default ContextMenu;



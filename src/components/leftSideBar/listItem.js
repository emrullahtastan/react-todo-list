import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import ListItemRightClickMenu from './listItemRightClickMenu'

const iconList = Object
    .keys(Icons)
    .filter(key => key !== "fas" && key !== "prefix" && key !== null)
    .map(icon => Icons[icon])

library.add(...iconList)

export class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rightClickMenuVisible: false}
    }

    rightClickEventHandler = () => {
        this.setState({rightClickMenuVisible: true});
    }

    rightClickOnBlur=()=>{
        console.log("hyuu")
        this.setState({rightClickMenuVisible: false});
    }

    render() {
        return (
            <div>
                {this.state.rightClickMenuVisible ? <ListItemRightClickMenu onBlur={() => {
                    console.log("huu")
                }}/> : ""}
                <div className={"list-item"} onContextMenu={this.rightClickEventHandler} onMouseOutCapture={console.log("hu2")}>
                    <div className={"list-item__left"}>
                        <div className={"list-item__left__icon"}>
                            <FontAwesomeIcon icon={`${this.props.icon}`}/>
                        </div>
                        <div className={"list-item__left__text"}>
                            {this.props.title}
                        </div>
                    </div>
                    <div className={"list-item__right"}>
                        <div className={"list-item__rgiht__number"}>
                            {this.props.number}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

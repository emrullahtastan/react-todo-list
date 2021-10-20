import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
    .keys(Icons)
    .filter(key => key !== "fas" && key !== "prefix" && key!==null)
    .map(icon => Icons[icon])

library.add(...iconList)

export class ListItem extends React.Component {
    render() {
        return (
            <div className={"list-item"}>
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
        )
    }
}

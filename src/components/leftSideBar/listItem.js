import React from "react";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const iconList = Object
    .keys(Icons)
    .filter(key => key !== "fas" && key !== "prefix" && key !== null)
    .map(icon => Icons[icon])

library.add(...iconList)

export class ListItem extends React.Component {
    render() {
        return (
            <Link to={`/tasks/${this.props.path}`}>
                <div>
                    <div className={"left-side-list-item"}>
                        <div className={"left-side-list-item__left"}>
                            <div className={"left-side-list-item__left__icon"}>
                                <FontAwesomeIcon icon={`${this.props.icon}`}/>
                            </div>
                            <div className={`left-side-list-item__left__text ${this.props.selected ? 'selected' : null}`}>
                                {this.props.title}
                            </div>
                        </div>
                        <div className={"left-side-list-item__right"}>
                            <div className={"left-side-list-item__rgiht__number"}>
                                {this.props.number}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

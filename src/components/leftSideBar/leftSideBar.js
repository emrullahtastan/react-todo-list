import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {ListItem} from './listItem'
import data from "../../assets/data.json";

export class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {list: data["menu-items"]}
    }
    render() {

        return (
            <div className={"left-side-bar"}>
                <div className={"left-side-bar__header"}>
                    <button className={"left-side-bar__header__button"}>
                        <FontAwesomeIcon className={"left-side-bar__header__button__icon"} icon={faChevronLeft}/>
                    </button>
                </div>
                <div className={"left-side-bar__area"}>
                    {this.state.list.map(function(object, i){
                        return <ListItem obj={object} />;
                    })}
                    <ListItem/>
                </div>
                <div className={"left-side-bar__footer"}>
                    buttons
                </div>
            </div>
        )
    }
}
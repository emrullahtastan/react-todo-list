import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faPlus, faFolderPlus} from '@fortawesome/free-solid-svg-icons'
import {ListItem} from './listItem'
import data from "../../assets/data.json";

export class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menuList: data["menu-items"], userMenuList: data["user-menu-items"]}
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
                    {this.state.menuList.map(function (object, i) {
                        return <ListItem title={object.title} icon={object.icon} number={object.number}/>;
                    })}
                    <ListItem/>
                </div>
                <div className={"left-side-bar__area"}>
                    {this.state.userMenuList.map(function (object, i) {
                        return <ListItem title={object.title} icon={object.icon} number={object.number}/>;
                    })}
                </div>
                <div className={"left-side-bar__area left-side-bar-new-list-area"}>
                    <div className={"left-side-bar-new-list-area__left"}>
                        <div className={"left-side-bar-new-list-area__left__icon"}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                        <div className={"left-side-bar-new-list-area__left__input-area"}>
                            <input className={"left-side-bar-new-list-area__left__input-area__input"} placeholder={"New list"}/>
                        </div>
                    </div>
                    <div className={"left-side-bar-new-list-area__right"}>
                        <FontAwesomeIcon icon={faFolderPlus}/>
                    </div>
                </div>
            </div>
        )
    }
}

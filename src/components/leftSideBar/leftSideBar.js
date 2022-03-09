import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faPlus, faFolderPlus, faEnvelope, faCalendarAlt, faUserFriends, faPaperclip, faCheck} from '@fortawesome/free-solid-svg-icons'
import {ListItem} from './listItem.js'
import data from "../../assets/data.json";
import ContextMenu from "../ContextMenu";

export class LeftSideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menuList: data["menu-items"], userMenuList: data["user-menu-items"], leftVariable: false}
    }

    enterValueToNewList = (e) => {
        if (e.key === 'Enter') {
            this.setState({userMenuList: [...this.state.userMenuList, {"icon": "list", "title": e.target.value}]});
            e.target.value = "";
        }
    }

    handleContextMenu = (e) => {
        let lyPos = e.clientY;
        if ((window.innerHeight - e.clientY) < 150)
            lyPos -= 150;
        this.setState({leftVariable: true, xPos: e.clientX, yPos: lyPos})
        e.preventDefault();
        document.addEventListener("click", this.closeContextMenu);
    }

    closeContextMenu = () => {
        if (this.state.leftVariable) {
            this.setState({leftVariable: false})
            document.removeEventListener("click", this.closeContextMenu);
        }
    }

    render() {


        return (
            <div className={"left-side-bar"}>
                <div style={{height: '90%'}}>
                    <ContextMenu left={this.state.leftVariable} xPos={this.state.xPos} yPos={this.state.yPos}/>
                    <div className={"left-side-bar__top"}>
                        <div className={"left-side-bar__top__header"}>
                            <button className={"left-side-bar__top__header__button"}>
                                <FontAwesomeIcon className={"left-side-bar__top__header__button__icon"} icon={faChevronLeft}/>
                            </button>
                        </div>
                        <div className={"left-side-bar__top__middle"}>
                            <div className={"left-side-bar__middle__area"}>
                                {this.state.menuList.map(function (object, i) {
                                    return <ListItem key={i} title={object.title} icon={object.icon} number={object.number}/>;
                                })}
                            </div>
                            <div className={"left-side-bar__area"}>
                                {this.state.userMenuList.map(function (object, i) {
                                    return (
                                        <div key={i} onContextMenu={(event) => {
                                            this.handleContextMenu(event)
                                        }}
                                             onClick={() => {
                                                 this.setState({leftVariable: false})
                                             }}
                                        >
                                            <ListItem title={object.title} icon={object.icon} number={object.number} contextMenuVisible={true}/>
                                        </div>
                                    );
                                }, this)}
                            </div>
                        </div>
                        <div className={"left-side-bar__area left-side-bar-new-list-area"}>
                            <div className={"left-side-bar-new-list-area__left"}>
                                <div className={"left-side-bar-new-list-area__left__icon"}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </div>
                                <div className={"left-side-bar-new-list-area__left__input-area"}>
                                    <input className={"left-side-bar-new-list-area__left__input-area__input"} placeholder={"New list"} onKeyDown={this.enterValueToNewList}/>
                                </div>
                            </div>
                            <div className={"left-side-bar-new-list-area__right"}>
                                <FontAwesomeIcon icon={faFolderPlus}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"left-side-bar__bottom"}>
                    <div className={"left-side-bar__bottom-buttons"}>
                        <div className={"left-side-bar__bottom-buttons__item"}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <div className={"left-side-bar__bottom-buttons__item"}>
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </div>
                        <div className={"left-side-bar__bottom-buttons__item"}>
                            <FontAwesomeIcon icon={faUserFriends}/>
                        </div>
                        <div className={"left-side-bar__bottom-buttons__item"}>
                            <FontAwesomeIcon icon={faPaperclip}/>
                        </div>
                        <div className={"left-side-bar__bottom-buttons__item"}>
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

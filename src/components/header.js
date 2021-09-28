import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import {faBullhorn} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchInputVisible: false, searchInputTooltipVisible: false};
    }

    searchInputMouseVisible(value) {
        this.setState({searchInputTooltipVisible: value})
    }

    searchInputVisible(value) {
        this.setState({searchInputVisible: value})
        if (value) {
            let thisApp = this;
            setTimeout(function () {
                thisApp.searchInput.focus();
            }, 100)
        }
        else
            this.searchInput.value="";
    }

    searchInputFocusOut() {
        let thisApp = this;
        setTimeout(function () {
            if (document.activeElement !== thisApp.searchInput)
                thisApp.setState({searchInputVisible: false})
        }, 100)
    }

    render() {
        return (
            <div className={"header"}>
                <div className={"header__brand"}>To Do</div>
                <div className={"header__search-area"} onBlur={() => {
                    this.searchInputFocusOut()
                }}>
                    <div className={`header__search-area__tooltip ${!this.state.searchInputTooltipVisible ? "hide" : "fade-in"}`}>
                        <div className={"header__search-area__tooltip-main"}>
                            Search
                        </div>
                        <div className={"header__search-area__tooltip-right-arrow"}>
                        </div>
                    </div>
                    <div className={`header__search-area__item ${!this.state.searchInputVisible ? "header__search-area__item-mobile" : "" }`}
                         onMouseOver={this.searchInputMouseVisible.bind(this, true)}
                         onMouseOut={this.searchInputMouseVisible.bind(this, false)}
                         onClick={this.searchInputVisible.bind(this, true)}
                    >
                        <button className={`header__search-area__item__button  
                            ${!this.state.searchInputVisible ? "w-100" : "header__search-area__item__button--active"}`}>
                            <FontAwesomeIcon className={"header__search-area__item__button__icon"} icon={faSearch}/>
                        </button>
                    </div>
                    <div className={`header__search-area__item w-100 flex ${!this.state.searchInputVisible ? "hide" : ""}`}>
                        <div className={"header__search-area__item w-100"}>
                            <input className={"header__search-area__item__input"} ref={(input) => {
                                this.searchInput = input;
                            }}/>
                        </div>
                        <div className={`header__search-area__item  ${!this.state.searchInputVisible ? "w-100" : ""}`}>
                            <button className={`header__search-area__item__button  
                            ${!this.state.searchInputVisible ? "" : "header__search-area__item__button--active"}`} onClick={this.searchInputVisible.bind(this, false)}>
                                <FontAwesomeIcon className={"header__search-area__item__button__icon"} icon={faTimes}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"header__right-side"}>
                    <div className={"header__right-side__item"}>
                        <button className={"header__right-side__item__button"}>
                            <FontAwesomeIcon className={"header__right-side__item__button__icon"} icon={faCog}/>
                        </button>
                    </div>
                    <div className={"header__right-side__item"}>
                        <button className={"header__right-side__item__button"}>
                            <FontAwesomeIcon className={"header__right-side__item__button__icon"} icon={faQuestion}/>
                        </button>
                    </div>
                    <div className={"header__right-side__item"}>
                        <button className={"header__right-side__item__button"}>
                            <FontAwesomeIcon className={"header__right-side__item__button__icon"} icon={faBullhorn}/>
                        </button>
                    </div>
                    <div className={"header__right-side__item"}>
                        <button className={"header__right-side__item__button"}>
                            <FontAwesomeIcon className={"header__right-side__item__button__icon"} icon={faUser}/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
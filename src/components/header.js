import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchInputVisible: false, searchInputTooltipVisible: false};
    }

    searchInputMouseOver() {
        this.setState({searchInputTooltipVisible: true})
    }

    searchInputMouseOut() {
        this.setState({searchInputTooltipVisible: false})
    }

    searchInputOnClick() {
        //this.setState({searchInputVisible: true})
    }

    render() {
        return (
            <div className={"header"}>
                <div className={"header__brand"}>To Do</div>
                <div className={"header__search-area"}>
                    <div className={`header__search-area__tooltip ${!this.state.searchInputTooltipVisible ? "hide" : "fade-in"}`}>
                        <div className={"header__search-area__tooltip-main"}>
                            Search
                        </div>
                        <div className={"header__search-area__tooltip-right-arrow"}>
                        </div>
                    </div>
                    <div className={`header__search-area__item  ${!this.state.searchInputVisible ? "w-100" : ""}`} onMouseOver={this.searchInputMouseOver.bind(this)}
                         onMouseOut={this.searchInputMouseOut.bind(this)} onClick={this.searchInputOnClick.bind(this)}>
                        <button className={`header__search-area__item__button  ${!this.state.searchInputVisible ? "w-100" : ""}`}>
                            <FontAwesomeIcon className={"header__search-area__item__button__icon"} icon={faSearch}/>
                        </button>
                    </div>
                    <div className={`w-100 flex ${!this.state.searchInputVisible ? "hide" : ""}`}>
                        <div className={"header__search-area__item"}>
                            <input className={"header__search-area__item__input"}/>
                        </div>
                        <div className={`header__search-area__item  ${!this.state.searchInputVisible ? "w-100" : ""}`}>
                            <button className={"header__search-area__item__button"}>
                                <FontAwesomeIcon className={"header__search-area__item__button__icon"} icon={faTimes}/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={"header__right-side"}>
                    <div>x</div>
                    <div>?</div>
                    <div>an</div>
                    <div>usr</div>
                </div>
            </div>
        )
    }
}
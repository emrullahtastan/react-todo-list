import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export class Header extends React.Component {
    render() {
        return (
            <div className={"header"}>
                <div className={"header__brand"}>To Do</div>
                <div className={"header__search-area"}>
                    <div className={"header__search-area__item"}>
                        <button className={"header__search-area__item__button"}>
                            <FontAwesomeIcon className={"header__search-area__item__button__icon"} icon={faSearch} />
                        </button>
                    </div>
                    <div className={"header__search-area__item"}>
                        <input className={"header__search-area__input"}/>
                    </div>
                    <div className={"header__search-area__item"}>
                        <button className={"header__search-area__item__button"}>
                            <FontAwesomeIcon className={"header__search-area__item__button__icon"} icon={faTimes} />
                        </button>
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
import React, {useState} from 'react';
import "./tooltip.scss"

function Tooltip(props) {

    const [visibleData, setVisibleData] = useState(false);

    function childrenMouseOver() {
        setVisibleData(true);
    }

    function childrenMouseOut() {
        setVisibleData(false);
    }

    return (
        <div className={"tooltip__frame"}>
            <div className={`tooltip__frame__data ${!visibleData ? 'hide' : ''}`}>
                {props.data}
            </div>
            <div className={"tooltip__frame__children"} onMouseOver={childrenMouseOver} onMouseOut={childrenMouseOut}>
                {props.children}
            </div>
        </div>
    );
}

export default Tooltip;

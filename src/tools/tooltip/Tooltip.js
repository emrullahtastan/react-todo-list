import React, {useState} from 'react';
import "./tooltip.scss"

function Tooltip(props) {

    const [visibleData, setVisibleData] = useState(false);
    const [childrenXPos, setChildrenXPos] = useState(0);
    const [childrenWidth, setChildrenWidth] = useState(0);
    const [tooltipWidth, setTooltipWidth] = useState(0);
    const [tooltipXPos, setTooltipXPos] = useState(0);

    function childrenMouseOver() {
        setVisibleData(true);
    }

    function childrenMouseOut() {
        setVisibleData(false);
    }

    return (
        <div className={"tooltip__frame"} onMouseOver={childrenMouseOver} onMouseOut={childrenMouseOut}>
            <div className={`tooltip__frame__data ${!visibleData ? 'hide' : ''}`} ref={el => {
                if (!el) return;
                setTooltipWidth(el.getBoundingClientRect().width / 2);
                setTooltipXPos(el.parentNode.getBoundingClientRect().top - el.getBoundingClientRect().height);
            }} style={{left: childrenXPos - tooltipWidth + childrenWidth, top: tooltipXPos}}>
                <div className={"tooltip__frame__data__cover"}>
                    {props.data}
                </div>
                <div className={"tooltip__frame__data__arrow"}></div>
            </div>
            <div className={"tooltip__frame__children"} ref={el => {
                if (!el) return;
                setChildrenXPos(el.getBoundingClientRect().x);
                setChildrenWidth(el.getBoundingClientRect().width / 2);
            }}>
                {props.children}
            </div>
        </div>
    );
}

export default Tooltip;

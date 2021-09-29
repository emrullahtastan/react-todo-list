import React from "react";
export class LeftSideBar extends React.Component{
    render (){
        return(
            <div className={"left-side-bar"}>
                <div className={"left-side-bar__header"}>
                    buttons
                </div>
                <div className={"left-side-bar__area"}>
                    items
                </div>
                <div className={"left-side-bar__footer"}>
                    buttons
                </div>
            </div>
        )
    }
}
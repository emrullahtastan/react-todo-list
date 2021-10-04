import React from "react";
import {LeftSideBar} from "./leftSideBar/leftSideBar";
import {ListSection} from "./leftSideBar/listSection";

export class Content extends React.Component {

    render() {
        return (
            <div className={"main-container"}>
                <LeftSideBar/>
                <ListSection/>
            </div>
        )
    }
}
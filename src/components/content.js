import React from "react";
import {LeftSideBar} from "./leftSideBar";
import {ListSection} from "./listSection";

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
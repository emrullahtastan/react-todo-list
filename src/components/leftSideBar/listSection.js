import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";
import ViewTasks from "../ViewTasks";

export class ListSection extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<div>ListSection</div>}/>
                <Route path="/tasks/:path" element={<ViewTasks/>}/>
            </Routes>
        )
    }
}

import ViewTasksHeader from "./viewTasksItems/ViewTasksHeader";
import ViewTasksItem from "./viewTasksItems/ViewTasksItem";

function ViewTasks() {
    return (
        <div className={"view-tasks-frame"}>
            <ViewTasksHeader/>
            <ViewTasksItem/>
        </div>
    )
}

export default ViewTasks;

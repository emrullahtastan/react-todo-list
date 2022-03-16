import {useParams} from "react-router-dom";

function ViewTasks() {
    return (<div>
        {useParams().path}
    </div>)
}

export default ViewTasks;

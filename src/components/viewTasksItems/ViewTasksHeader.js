import {useParams} from "react-router-dom";
import {viewTasks} from '../../network/apiFactory'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisH, faUserFriends, faSort} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../../tools/tooltip/Tooltip";

function ViewTasksHeader() {
    let key = useParams().path;
    let {title} = viewTasks({key});
    return (
        <div>
            <div className={"view-tasks-frame__header__top"}>
                <div className={"view-tasks-frame__header__top__left"}>
                    <div className={"view-tasks-frame__header__top__left__text"}>{title}</div>
                    <Tooltip data={"List options menu this click opening full sentence example"}>
                        <div className={"view-tasks-frame__header__top__left__menu"}>
                            <FontAwesomeIcon icon={faEllipsisH}/>
                        </div>
                    </Tooltip>
                </div>
                <div className={"view-tasks-frame__header__top__right"}>
                    <div className={"view-tasks-frame__header__top__right__sort"}>
                        <div><FontAwesomeIcon icon={faSort}/></div>
                        <div>Sort</div>
                    </div>
                    <div className={"view-tasks-frame__header__top__right__share"}>
                        <FontAwesomeIcon icon={faUserFriends}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTasksHeader;

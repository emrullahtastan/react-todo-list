import data from "../assets/data.json";

export function viewTasks({key}) {
    let obj = {};
    let arr = [];
    Object.values(data).forEach((a) => {
        arr = arr.concat(a);
    });
    obj['title'] = arr.filter(a => a.path === key).map(a => a.title)[0];
    return obj;
}

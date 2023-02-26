import useColumnTask from "../hooks/useColumnTask";
import { ColumnType } from "../utils/enum";
import { TaskModel } from "../utils/model";
import Task from "./Task";

const ColumnColor: Record<ColumnType, string> = {
    Backlog: "red",
    Todo: "green",
    Doing: "blue",
    Done: "white"
}


function Column({column}: {column: ColumnType}) {

    const {tasks, addNewTask} = useColumnTask(column);

    const conlumnTasks = tasks.map( (t, index) => {
        return <Task key={t.id} index={index} task={t}></Task>
    })
    return (
        <div className="column">
            <h2>{column}</h2>
            <button onClick={addNewTask}>Add</button>
            {conlumnTasks}
        </div>
    )
}

export default Column
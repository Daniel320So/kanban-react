import useColumnDrop from "../hooks/useColumnDrop";
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

    const {tasks, addNewTask, updateTask, deleteTask, dropTaskFrom} = useColumnTask(column);

    const {dropRef, isOver} = useColumnDrop(column, dropTaskFrom);

    const style = {
        opacity: isOver? 0.85 : 1
    }

    const conlumnTasks = tasks.map( (t, index) => {
        return <Task key={t.id} index={index} task={t} onDelete={deleteTask} onUpdate ={updateTask}></Task>
    })
    return (
        <div className="column" ref={dropRef} style={style}>
            <h2>{column}</h2>
            <button onClick={addNewTask}>Add</button>
            {conlumnTasks}
        </div>
    )
}

export default Column
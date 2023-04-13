import useColumnDrop from "../hooks/useColumnDrop";
import useColumnTask from "../hooks/useColumnTask";
import { ColumnType } from "../utils/enum";
import Task from "./Task";
import '../styles/Column.css';

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
        <div className="Column" ref={dropRef} style={style}>
            <h2 aria-label={"Tasks in " + column}>{column}</h2>
            <div className = "Task-Container">
                {conlumnTasks}
            </div>
            <button className="Add-Column" aria-label={"Add a new task in " + column} onClick={addNewTask}>Add a new task</button>
        </div>
    )
}

export default Column
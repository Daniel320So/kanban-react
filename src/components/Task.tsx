import { TaskModel } from "../utils/model";

type TaskProps = {
    index: number;
    task: TaskModel;
};

function Task({index, task}:TaskProps) {
    return (
        <div className="task">
            <h2>{task.title}</h2>
            <textarea value={task.description}></textarea>
            <p>Assigned To: {task.assignees.toString()}</p>
        </div>
    )
}

export default Task;
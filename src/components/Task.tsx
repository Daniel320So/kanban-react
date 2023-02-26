import { TaskModel } from "../utils/model";

type TaskProps = {
    index: number;
    task: TaskModel;
    onUpdate: (id: TaskModel["id"], updateTask: TaskModel) => void;
    onDelete: (id: TaskModel["id"]) => void;
};

function Task({index, task, onUpdate: handleUpdate, onDelete: handleDelete}:TaskProps) {

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        handleUpdate(task.id, {...task, title:newTitle})
    }

    const handleDeleteClick = () => {
        handleDelete(task.id);
    }

    return (
        <div className="task">
            <textarea onChange={handleTitleChange}>{task.title}</textarea>
            <textarea value={task.description}></textarea>
            <p>Assigned To: {task.assignees.toString()}</p>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Task;
import { useTaskDragAndDrop } from "../hooks/useTaskDragAndDrop";
import { TaskModel } from "../utils/model";
import { CiCircleRemove } from "react-icons/ci";
import '../styles/Task.css';

type TaskProps = {
    index: number;
    column: string;
    task: TaskModel;
    onUpdate: (id: TaskModel["id"], updateTask: TaskModel) => void;
    onDelete: (id: TaskModel["id"]) => void;
};

function Task({index, column, task, onUpdate: handleUpdate, onDelete: handleDelete}:TaskProps) {

    const {ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>({
        task, index
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newTitle = e.target.value;
        handleUpdate(task.id, {...task, title:newTitle})
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newDescription = e.target.value;
        handleUpdate(task.id, {...task, description:newDescription})
    }

    const handleDeleteClick = () => {
        handleDelete(task.id);
    }

    const style ={
        opacity: isDragging? 0.5: 1
    }

    return (
        <div className="Task" id={task.id} ref={ref} style={style} >
            <div className="Task-Header">
                <textarea aria-label={column + "Task"} className="Title" onChange={handleTitleChange} value={task.title}></textarea>
                <button aria-label={"Remove" + task.title} onClick={handleDeleteClick}><CiCircleRemove/></button>
            </div>
            <textarea aria-label={"Task Description"} className="Description" onChange={handleDescriptionChange} value={task.description}></textarea>
        </div>
    )
}

export default Task;
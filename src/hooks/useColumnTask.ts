import { v4 as uuidv4} from "uuid";
import { useCallback } from "react";
import { ColumnType } from "../utils/enum";
import { TaskModel } from "../utils/model";
import useTaskCollection from "./useTaskCollection";

function useColumnTask(column:ColumnType) {
    const [tasks, setTasks] = useTaskCollection();

    const addNewTask = useCallback(() => {
        console.log("Add Task")
        setTasks((allTasks) => {
            const columnTasks = allTasks[column];
            const newColumnTask: TaskModel = {
                id: uuidv4(),
                title: "New Task",
                description: "Create the template with react npx command",
                assignees: ["Daniel"],
                column: column
            }

            return {
                ...allTasks,
                [column]: [newColumnTask, ...columnTasks]
            }
        })
    }, [column, setTasks]);

    return {
        tasks: tasks[column],
        addNewTask
    };
};

export default useColumnTask;
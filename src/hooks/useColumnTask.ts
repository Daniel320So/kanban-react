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

    const updateTask = useCallback(
        (id: TaskModel["id"], updatedTask: Omit<Partial<TaskModel>, "id">) => {
            setTasks((allTasks) => {
                const columnTasks = allTasks[column];

                return {
                    ...allTasks,
                    [column]: columnTasks.map((task) => {
                        return task.id === id? { ...task, ...updatedTask} : task;
                    })
                };
            });
        }, [column, setTasks]
    )

    const deleteTask = useCallback(
        (id: TaskModel["id"]) => {
            setTasks((allTasks) => {
                const columnTasks = allTasks[column];

                return {
                    ...allTasks,
                    [column]: columnTasks.filter(task => task.id !== id)
                };
            });
        }, [column, setTasks]
    )

    const dropTaskFrom = useCallback((from: ColumnType, id: TaskModel["id"]) => {
        setTasks((allTasks) => {
            const fromColumnTasks = allTasks[from];
            const toColumnTasks = allTasks[column];
            const movingTask = fromColumnTasks.find(task => task.id === id)

            if (!movingTask) return allTasks;

            return {
                ...allTasks,
                [from]: fromColumnTasks.filter(task => task.id !== id),
                [column]: [{ ...movingTask, column}, ...toColumnTasks]
            }
        })
    }, [column, setTasks])

    return {
        tasks: tasks[column],
        addNewTask,
        updateTask,
        deleteTask,
        dropTaskFrom
    };
};

export default useColumnTask;
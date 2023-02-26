import { ColumnType } from "../utils/enum";
import { TaskModel } from "../utils/model";
import Task from "./Task";

const ColumnColor: Record<ColumnType, string> = {
    Backlog: "red",
    Todo: "green",
    Doing: "blue",
    Done: "white"
}

const tasksList: TaskModel[] = [
    {
        id: 1,
        title: "Create a TS React Tempalte",
        description: "Create the template with react npx command",
        assignees: ["Daniel", "Winsy"],
        column: ColumnType.BACKLOG
    },
    {
        id: 2,
        title: "Create Components",
        description: "Create Task and Column components",
        assignees: ["Daniel", "Winsy"],
        column: ColumnType.BACKLOG
    }
]

function Column({column}: {column: ColumnType}) {

    const tasks = tasksList.map( t => {
        return <Task key={t.id} index={t.id} task={t}></Task>
    })
    return (
        <div className="column">
            {tasks}
        </div>
    )
}

export default Column
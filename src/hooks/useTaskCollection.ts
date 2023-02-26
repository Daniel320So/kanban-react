import { v4 as uuidv4} from "uuid";
import { ColumnType } from "../utils/enum";
import { TaskModel } from "../utils/model";
import { useLocalStorage } from 'usehooks-ts';

function useTaskCollection() {
    return useLocalStorage<{[key in ColumnType]: TaskModel[]}>("task", {
        Backlog: [
            {
                id: uuidv4(),
                title: "Create a TS React Tempalte",
                description: "Create the template with react npx command",
                column: ColumnType.BACKLOG
            },
        ],
        Todo: [
            {
                id: uuidv4(),
                title: "Create a TS React Tempalte",
                description: "Create the template with react npx command",
                column: ColumnType.TO_DO
            },
        ],
        Doing: [
            {
                id: uuidv4(),
                title: "Create a TS React Tempalte",
                description: "Create the template with react npx command",
                column: ColumnType.DOING
            },
            {
                id: uuidv4(),
                title: "Create Components",
                description: "Create Task and Column components",
                column: ColumnType.DOING
            }
        ],
        Done: [
            {
                id: uuidv4(),
                title: "Create a TS React Tempalte",
                description: "Create the template with react npx command",
                column: ColumnType.DONE
            },
        ]
    })
}

export default useTaskCollection;
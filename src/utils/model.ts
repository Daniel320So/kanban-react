import { ColumnType } from "./enum";

export interface TaskModel {
    id: string;
    title: string;
    description: string;
    assignees: string[];
    column: ColumnType;
}
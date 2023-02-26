import { ColumnType } from "./enum";

export interface TaskModel {
    id: number;
    title: string;
    description: string;
    assignees: string[];
    column: ColumnType;
}
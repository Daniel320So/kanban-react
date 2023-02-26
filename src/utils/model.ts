import { ColumnType } from "./enum";

export interface TaskModel {
    id: string;
    title: string;
    description: string;
    column: ColumnType;
}

export interface DragItem {
    index: number;
    id: TaskModel["id"];
    from: ColumnType;
}
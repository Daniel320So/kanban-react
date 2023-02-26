import { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { ItemType } from '../utils/enum';
import { DragItem, TaskModel } from '../utils/model';

export function useTaskDragAndDrop<T extends HTMLElement>(
  { task, index }: { task: TaskModel; index: number }
) {

  const ref = useRef<T>(null);

  const [{ isDragging }, drag] = useDrag<
    DragItem, 
    void,
    { isDragging: boolean }
  >({
    item: { from: task.column, id: task.id, index },
    type: ItemType.TASK,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  return {
    ref,
    isDragging,
  };
}

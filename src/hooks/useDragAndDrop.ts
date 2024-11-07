import { useDispatch } from "react-redux";
import { reorderTodo } from "../reducers/todo";

const useDragAndDrop = () => {
  const dispatch = useDispatch();

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    e.dataTransfer.setData("text/plain", id);
    const target = e.target as HTMLLIElement;
    target.style.opacity = "0.5";
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    target.style.opacity = "1";
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, droppedId: string) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");

    if (draggedId !== droppedId) {
      dispatch(reorderTodo({ draggedId, droppedId }));
    }
  };

  return {
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDrop,
  };
};

export default useDragAndDrop;

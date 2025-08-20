import { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { InitialData } from "./utility/data/InitialData";
import { UseLocalState } from "./utility/hooks/UseLocalState";
import Board from "./components/Board";
import Toolbar from "./components/Toolbar";

function reducer(state, action) {
  switch (action.type) {
    case "MOVE": {
      const { source, destination, draggableId } = action.payload;
      if (!destination) return state;

      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];

      // same column
      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        return {
          ...state,
          columns: { ...state.columns, [start.id]: { ...start, taskIds: newTaskIds } },
        };
      }

      // move across columns
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);

      return {
        ...state,
        columns: {
          ...state.columns,
          [start.id]: { ...start, taskIds: startTaskIds },
          [finish.id]: { ...finish, taskIds: finishTaskIds },
        },
      };
    }
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = UseLocalState("kanban", reducer, InitialData);
  const [search, setSearch] = useState("");

  const onDragEnd = (result) => {
    dispatch({ type: "MOVE", payload: result });
  };

  return (
    <>
      <Toolbar search={search} setSearch={setSearch} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Board state={state} />
      </DragDropContext>
    </>
  );
}

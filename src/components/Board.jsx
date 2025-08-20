import Column from "./Column";

export default function Board({ state }) {
  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {state.columnOrder.map((colId) => {
        const column = state.columns[colId];
        const tasks = column.taskIds.map((tId) => state.tasks[tId]);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </div>
  );
}

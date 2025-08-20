export const InitialData = {
  tasks: {
    "t-1": { id: "t-1", title: "Set up project", description: "Initialize Vite + React" },
    "t-2": { id: "t-2", title: "Design UI", description: "Board, Columns, Cards" },
    "t-3": { id: "t-3", title: "Add Drag & Drop", description: "Hello Pangea DnD" },
  },
  columns: {
    backlog: { id: "backlog", title: "Backlog", taskIds: ["t-1", "t-2"] },
    progress: { id: "progress", title: "In Progress", taskIds: ["t-3"] },
    review: { id: "review", title: "Review", taskIds: [] },
    done: { id: "done", title: "Done", taskIds: [] },
  },
  columnOrder: ["backlog", "progress", "review", "done"],
};

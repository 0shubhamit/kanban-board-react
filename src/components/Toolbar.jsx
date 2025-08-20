export default function Toolbar({ search, setSearch }) {
  return (
    <div className="p-4 flex justify-between items-center bg-gray-200">
      <h1 className="text-2xl font-bold">Kanban Board</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />
    </div>
  );
}

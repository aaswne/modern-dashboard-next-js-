type Task = {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
};

type DisplayProps = {
  tasks: Task[];
  handleEdit: (item: Task) => void;
  handleDelete: (id: number) => void;
};

function Display(props: DisplayProps) {
  const { tasks, handleEdit, handleDelete } = props;

  console.log("Display component render 🔁", tasks);

  const onEditClick = (item: Task) => {
    console.log("Editing task ✏️", item);
    handleEdit(item);
  };

  const onDeleteClick = (id: number) => {
    console.log("Deleting task 🗑️", id);
    handleDelete(id);
  };

  const getStatus = (status: string) => {
    if (!status) {
      console.log("No status found, defaulting to Todo");
      return "Todo";
    }
    return status;
  };

  return (
    <div className="mt-8 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-900">
      
      {/* task grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
        {tasks && tasks.length > 0 ? (
          tasks.map((item, index) => {
            console.log("Rendering task item 👉", index, item);

            return (
              <div
                key={item.id}
                className="rounded-xl border p-4 transition hover:shadow-md"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  
                  <h3 className="text-lg font-semibold">
                    {item.title || "Untitled"}
                  </h3>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                    {getStatus(item.status)}
                  </span>
                </div>

                <p className="mb-4 text-sm text-zinc-600">
                  {item.description || "No description..."}
                </p>

                <div className="mb-4 text-sm">
                  <span className="font-medium">Due:</span>{" "}
                  {item.dueDate ? item.dueDate : "No due date"}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => onEditClick(item)}
                    className="rounded-md border px-3 py-1 text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDeleteClick(item.id)}
                    className="rounded-md border border-red-500 px-3 py-1 text-sm text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <>
            {console.log("No tasks available ❗")}
            <p className="text-sm text-zinc-500">No tasks found.</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Display;
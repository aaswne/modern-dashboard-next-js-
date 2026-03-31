function Display({ data, setData }) {
  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id))
  }
  console.log(data)
  return (
    <div className="mt-8 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-900">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {data?.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border p-4 transition hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>

              <span className="rounded-full px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-700">
                {item.status ? item.status : "toDo"}
              </span>
            </div>

            <p className="mb-4 text-sm text-zinc-600">
              {item.description}
            </p>

            <div className="mb-4 text-sm">
              <span className="font-medium">Due:</span> {item.dueDate}
            </div>

            <div className="flex gap-2">
              <button className="rounded-md border px-3 py-1 text-sm">
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="rounded-md border border-red-500 px-3 py-1 text-sm text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Display
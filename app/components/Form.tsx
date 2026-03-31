"use client"
import { useState } from "react"
function Form({ data, setData, open, setOpen }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [dueDate, setDueDate] = useState("")

    console.log(title, description, status, dueDate)


    const handleClick = (e) => {
  e.preventDefault();

  if (title && description) {
    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
      dueDate,
    };

    setData((prev) => [...(prev || []), newTask]);
    setOpen(false);

    console.log(newTask);
  } else {
    alert("Enter title and description at least");
  }
};

    return (
        <div className="mx-auto w-100 max-w-2xl rounded-2xl border  bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    Add Task
                </h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    Fill in the details below to create a new task.
                </p>
            </div>

            <form onSubmit={(handleClick)} className="space-y-5">
                <div className="space-y-2">
                    <label
                        htmlFor="title"
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                        Title
                    </label>
                    <input
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        id="title"
                        type="text"
                        placeholder="Enter task title"
                        className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-500"
                    />
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                    >
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        id="description"
                        rows={4}
                        placeholder="Write a short description"
                        className="w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-500"
                    />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                        <label
                            htmlFor="status"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Status
                        </label>
                        <select
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value)
                            }}
                            id="status"
                            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-500"
                        >
                            <option>Todo</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="dueDate"
                            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                        >
                            Due Date
                        </label>
                        <input
                            value={dueDate}
                            onChange={(e) => {
                                setDueDate(e.target.value)
                            }}
                            id="dueDate"
                            type="date"
                            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white dark:focus:border-zinc-500"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                    <button
                        type="button"
                        className="rounded-xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-zinc-900"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
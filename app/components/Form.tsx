"use client";

import { FormProps } from "../../app/types";

function Form(props: FormProps) {
  const { formData, setFormData, handleSubmit, mode, handleClose } = props;

  const handleChange = (key: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border bg-white p-4 shadow-sm sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl dark:text-white">
          {mode === "edit" ? "Edit Task" : "Add Task"}
        </h2>

        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {mode === "edit"
            ? "You can update task here."
            : "Just fill the form and create task."}
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>

          <input
            id="title"
            type="text"
            value={formData.title}
            placeholder="Enter task title"
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full rounded-xl border px-4 py-3 text-sm outline-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            Description
          </label>

          <textarea
            id="description"
            rows={4}
            value={formData.description}
            placeholder="Write something..."
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full resize-none rounded-xl border px-4 py-3 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="status" className="text-sm font-medium">
              Status
            </label>

            <select
              id="status"
              value={formData.status}
              onChange={(e) => handleChange("status", e.target.value)}
              className="w-full rounded-xl border px-4 py-3 text-sm"
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="dueDate" className="text-sm font-medium">
              Due Date
            </label>

            <input
              id="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={(e) => handleChange("dueDate", e.target.value)}
              className="w-full rounded-xl border px-4 py-3 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleClose}
            className="w-full rounded-xl border px-5 py-2.5 text-sm sm:w-auto"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full rounded-xl bg-black px-5 py-2.5 text-sm text-white sm:w-auto"
          >
            {mode === "edit" ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
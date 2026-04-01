"use client";

type FormProps = {
    formData: {
        id: number | null;
        title: string;
        description: string;
        status: string;
        dueDate: string;
    };
    setFormData: React.Dispatch<any>;
    handleSubmit: (e: React.FormEvent) => void;
    mode: "create" | "edit";
    handleClose: () => void;
};

function Form(props: FormProps) {
    const { formData, setFormData, handleSubmit, mode, handleClose } = props;

    console.log("Form rendered ", mode);

    const handleChange = (key: string, value: string) => {
        console.log("Updating field:", key, value);

        setFormData((prev: any) => {
            const updated = { ...prev, [key]: value };
            console.log("New formData:", updated);
            return updated;
        });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitiing form ", formData);
        handleSubmit(e);
    };

    return (
        <div className="mx-auto w-100 max-w-2xl rounded-2xl border bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

            {/* header */}
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {mode === "edit" ? "Edit Task" : "Add Task"}
                </h2>

                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {mode === "edit"
                        ? "You can update task here."
                        : "Just fill the form and create task."}
                </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">

                {/* title */}
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

                {/* description */}
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

                <div className="grid gap-5 md:grid-cols-2">

                    {/* status */}
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

                    {/* due date */}
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

                {/* buttons */}
                <div className="flex gap-3 justify-end pt-2">
                    <button
                        type="button"
                        onClick={() => {
                            console.log("Closing form ");
                            handleClose();
                        }}
                        className="rounded-xl border px-5 py-2.5 text-sm"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded-xl bg-black text-white px-5 py-2.5 text-sm"
                    >
                        {mode === "edit" ? "Update Task" : "Add Task"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
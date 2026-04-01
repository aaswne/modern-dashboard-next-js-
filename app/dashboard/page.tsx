"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Controls from "../components/Controls";
import Display from "../components/Display";
import Form from "../components/Form";
import type { Task } from "../../app/types"

const emptyForm: Task = {
  id: 0,
  title: "",
  description: "",
  status: "Todo",
  dueDate: "",
};

function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [formData, setFormData] = useState<Task>(emptyForm);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [open, setOpen] = useState(false);

  console.log("Page rendered");
  console.log("Current mode:", mode);
  console.log("Form open status:", open);
  console.log("Tasks count:", tasks.length);

  useEffect(() => {
    console.log("Trying to load tasks from localStorage...");

    const storedTasks = localStorage.getItem("tasks");

    if (!storedTasks) {
      console.log("No tasks found in localStorage");
      return;
    }

    try {
      const parsedTasks = JSON.parse(storedTasks);
      console.log("Loaded tasks:", parsedTasks);
      setTasks(parsedTasks);
    } catch (err) {
      console.error("Failed to parse localStorage tasks", err);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    console.log("Saving tasks to localStorage...", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const resetForm = () => {
    console.log("Resetting form data");
    setFormData(emptyForm);
    setMode("create");
  };

  const handleOpen = () => {
    console.log("Opening form for new task");
    resetForm();
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Closing form");
    setOpen(false);
    resetForm();
  };

  const handleEdit = (item: Task) => {
    console.log("Editing task:", item);
    setMode("edit");
    setFormData({ ...item });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    console.log("Trying to delete task with id:", id);

    const updatedTasks = tasks.filter((item) => item.id !== id);

    console.log("Tasks after delete:", updatedTasks);
    setTasks(updatedTasks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form submitted");
    console.log("Submitted form data:", formData);

    if (!formData.title.trim() || !formData.description.trim()) {
      console.log("Validation failed");
      alert("Enter title and description at least");
      return;
    }

    if (mode === "edit") {
      console.log("Updating existing task...");

      const updatedTasks = tasks.map((item) => {
        if (item.id === formData.id) {
          console.log("Matched task for edit:", item.id);
          return formData;
        }

        return item;
      });

      setTasks(updatedTasks);
    } else {
      console.log("Creating new task...");

      const newTask: Task = {
        ...formData,
        id: Date.now(),
      };

      console.log("New task created:", newTask);
      setTasks((prev) => [...prev, newTask]);
    }

    setOpen(false);
    resetForm();
  };

  return (
    <div className="p-10">
      <Header />

      <Controls handleOpen={handleOpen} />

      {open ? (
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          mode={mode}
          handleClose={handleClose}
        />
      ) : null}

      <Display
        tasks={tasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Page;
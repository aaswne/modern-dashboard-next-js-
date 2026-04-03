"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Controls from "../components/Controls";
import Display from "../components/Display";
import Form from "../components/Form";
import type { Task } from "../../app/types";

const emptyForm: Task = {
  id: 0,
  title: "",
  description: "",
  status: "Todo",
  dueDate: "",
};

function Page() {
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [formData, setFormData] = useState<Task>(emptyForm);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (!storedTasks) return;

    try {
      const parsedTasks: Task[] = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const resetForm = () => {
    setFormData(emptyForm);
    setMode("create");
  };

  const handleOpen = () => {
    resetForm();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleEdit = (task: Task) => {
    setMode("edit");
    setFormData(task);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Please enter both title and description.");
      return;
    }

    if (mode === "edit") {
      const updatedTasks = tasks.map((task) =>
        task.id === formData.id ? formData : task
      );
      setTasks(updatedTasks);
    } else {
      const newTask: Task = {
        ...formData,
        id: Date.now(),
      };

      setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    handleClose();
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const filteredTasks = tasks.filter((task) => {
    const searchValue = search.toLowerCase();

    return (
      task.title.toLowerCase().includes(searchValue) ||
      task.description.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div className="p-10">
      <Header />

      <Controls
        handleOpen={handleOpen}
        handleSearch={handleSearch}
        search={search}
      />

      {open && (
        <Form
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          mode={mode}
          handleClose={handleClose}
        />
      )}

      <Display
        tasks={filteredTasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Page;
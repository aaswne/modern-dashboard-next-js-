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
      const parsedTasks = JSON.parse(storedTasks);
      setTasks(parsedTasks);
    } catch (err) {
      console.error("Failed to parse localStorage tasks", err);
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

  const handleEdit = (item: Task) => {
    setMode("edit");
    setFormData({ ...item });
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Enter title and description at least");
      return;
    }

    if (mode === "edit") {
      const updatedTasks = tasks.map((item) =>
        item.id === formData.id ? formData : item
      );
      setTasks(updatedTasks);
    } else {
      const newTask: Task = {
        ...formData,
        id: Date.now(),
      };
      setTasks((prev) => [...prev, newTask]);
    }

    setOpen(false);
    resetForm();
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    console.log("searchword", value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-10">
      <Header />

      <Controls
        handleOpen={handleOpen}
        handleSearch={handleSearch}
        search={search}
      />

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
        tasks={filteredTasks}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Page;
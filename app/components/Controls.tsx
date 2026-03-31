
import { useState } from "react";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function Controls({open, setOpen}: {open: boolean, setOpen: (value: boolean) => void}) {

const addTask = () => {

  setOpen(!open)


}
    return (
        <div className="mb-6 flex  flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
            <Input className="w-50" type="search" placeholder="search" ></Input>

         <Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value="Todo">Todo</SelectItem>
    <SelectItem value="In Progress">In Progress</SelectItem>
    <SelectItem value="Completed">Completed</SelectItem>
  </SelectContent>
</Select>

<Button onClick={addTask} > + Add Task</Button>
        </div>
    )
}

export default Controls

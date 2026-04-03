import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

type ControlsProps = {
  handleOpen: () => void;
  handleSearch: (value: string) => void;
  search: string;
};

function Controls({ handleOpen, handleSearch, search }: ControlsProps) {
  const handleSelectChange = (value: string) => {
    console.log("Selected status:", value);
  };

  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
      <Input
        type="search"
        placeholder="Search tasks..."
        className="w-50"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="Todo">Todo</SelectItem>
          <SelectItem value="In Progress">In Progress</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
        </SelectContent>
      </Select>

      <Button onClick={handleOpen}>+ Add Task</Button>
    </div>
  );
}

export default Controls;
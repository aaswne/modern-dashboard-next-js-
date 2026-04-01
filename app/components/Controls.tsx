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
};

function Controls(props: ControlsProps) {
  const { handleOpen } = props;

  console.log("Controls rendered 🎛️");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Searching for:", e.target.value);
    // TODO: connect search logic later
  };

  const handleSelectChange = (value: string) => {
    console.log("Filter selected:", value);
    // maybe filter tasks here later
  };

  const onAddClick = () => {
    console.log("Opening form ➕");
    handleOpen();
  };

  return (
    <div className="mb-6 flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm dark:bg-zinc-900 md:flex-row md:items-center md:justify-between">
      
      {/* search */}
      <Input
        className="w-50"
        type="search"
        placeholder="Search tasks..."
        onChange={handleSearch}
      />

      {/* filter */}
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

      {/* add button */}
      <Button onClick={onAddClick}>+ Add Task</Button>
    </div>
  );
}

export default Controls;
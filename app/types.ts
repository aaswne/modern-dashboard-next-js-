export type Task = {
  id: number; // keep it simple
  title: string;
  description: string;
  status: string;
  dueDate: string;
};

export type FormProps = {
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
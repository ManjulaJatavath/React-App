import { useState, ChangeEvent, FormEvent} from 'react';


interface TaskFormProps {
    onAddTask: (task: string) => void;
  }
const TaskForm: React.FC<TaskFormProps> = ({onAddTask}) => {
    const [task, setTask] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
      };
      const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();
        if (task.trim()) {
          onAddTask(task);
          setTask('');
        }
      }
    
  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '600px', margin: '0 auto'  }}
      className="p-4 border rounded shadow-md mx-2 my-4"
    >
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a new task"
        className="border p-2 w-full rounded mb-2"
        style={{ borderColor: '#ddd' }}
      />
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded hover:bg-pink-600"
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskForm


// style={{ maxWidth: '600px', margin: '2 auto'  }}
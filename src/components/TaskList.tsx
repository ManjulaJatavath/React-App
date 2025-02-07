

interface Task{
    id:number;
    text:string;
    completed:boolean
}

interface TaskListProps{
    tasks: Task[];
    onToggleTask: (id: number) => void;
}


const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask }) => {
    return (
        <ul className="list-disc pl-5">
          {tasks.map(task => (
            <li
              key={task.id}
              onClick={() => onToggleTask(task.id)}
              className={`cursor-pointer py-2 ${task.completed ? 'line-through text-gray-500 ' : 'text-black'}`}
              style={{ transition: 'all 0.3s ease' }}
            >
              {task.text}
            </li>
          ))}
        </ul>
      );
}

export  default TaskList



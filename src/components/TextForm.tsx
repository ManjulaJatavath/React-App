
import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { VerticalButtons } from './VerticalButtons';
import ResponsiveGridButtons from './ResponsiveGridButtons';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import MyComponent2,{MyComponent1} from './Class_Compo';
import { Garage } from './Garage';
import Userlist from './UserList';




interface Task {
  id: number;
  text: string;
  completed: boolean;
}
// import Testcomp from './Testcomp';

const TextForm = (props:any) => {
    const handleUpperCaseClick =()=>{
        console.log('UpperCase Was Clicked' + text)
        // setText("You have clicked on handleuppercaseclick")
        let newText=text.toUpperCase();
        setText(newText)
        toast("UpperCase Was Clicked!");
    }
    const handleLowerCaseClick =()=>{
        console.log('LowerCase Was Clicked' + text)
        let newText=text.toLowerCase();
        setText(newText)
        toast("LowerCase Was Clicked!");
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText)
    }
    const handleOnChange =(event:any)=>{
        console.log('On change')
        setText(event.target.value)
    }
  
    const handleExtraSpaces =()=>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))

    }

    const handleCopy = () => {
      const textElement = document.getElementById("mybox") as HTMLTextAreaElement | null;
      if (textElement) {
        textElement.select();
        navigator.clipboard.writeText(textElement.value);
        toast("Text Copied!");
      } 
    }
// 

    const [text, setText] = useState('Enter Text Here!');

    const [tasks, setTasks] = useState<Task[]>([]);
    const [nextId, setNextId] = useState<number>(1);
  
    const addTask = (taskText: string) => {
      setTasks([...tasks, { id: nextId, text: taskText, completed: false }]);
      setNextId(nextId + 1);
    };
  
    const toggleTask = (id: number) => {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    };
  
    const usersData = [
      { id: 1, name: 'manju', age: 24 },
      { id: 2, name: 'aruna', age: 16 },
      { id: 3, name: 'greethika', age: 8},
      { id: 4, name: 'nandu', age: 21}
    ];

    // console.log(useState("Enter you text2"))
    // setText("Hello")
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3 shadow-md">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows={3}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpperCaseClick} >Convert To Upper Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLowerCaseClick} >Convert To Lower Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-2 ">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
      <p >{0.008*text.split(" ").length} Mintes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Nothing to preview"}</p>
      <p>Please Enter something in the textbox above to preview it here</p>

      <div className="container mx-auto p-4">
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
      <div>
        <MyComponent1/>
        <MyComponent2/>
      </div>
    </div>
      
      {/* <MouseEventsExample/> */}
      <ToastContainer />
      <VerticalButtons />
      <ResponsiveGridButtons />
      <Garage />
      <Userlist users={usersData} />
    </div>

    </>
  )
}

export default TextForm

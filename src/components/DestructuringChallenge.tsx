
import { useState } from "react";

const DestructuringChallenge = () => {
    const users=[
        {id:1,name:'manju',age:24},
        {id:1,name:'aruna',age:26},
        {id:1,name:'mani',age:28},
    ]
  return (
    <div>
        {users.map(({id,name,age})=>(
            <div key={id}>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
        )
    )}
    </div>
  )
}

export{DestructuringChallenge}

const EventHandling = () => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        setMessage("Button clicked!");
    };

    return (
        <div>
        <button 
          onClick={handleClick} 
          className="bg-green-800 px-3 py-2 mt-2 rounded-2xl text-white hover:bg-black mx-2"
        >
          Click Me-Even Handle
        </button>
        <p>{message}</p>
      </div>
    );
}

export default EventHandling;
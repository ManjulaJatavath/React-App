import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MouseEventsExample = () => {
  const handleClick = () => {
    console.log('Element clicked!');
  };

  const handleDoubleClick = () => {
    toast('Element double-clicked!');
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered element!');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left element!');
  }
  const handleMouseOver = () => {
    toast('Mouse Hover Happend!');
  };

  return (
    <div>
      <button
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Hover or Click Me
      </button>
    </div>
  );
};

export default MouseEventsExample

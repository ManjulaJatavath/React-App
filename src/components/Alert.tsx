import { useState } from 'react'



// Alert component
const Alert = (props:any) => {
    const[visible, setVisible]=useState(true)
    if (visible === false) {
        return null;
      }
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
      <div className="flex justify-between items-center">
        <strong>{props.alert}</strong>
        <button
          type="button"
          className="text-yellow-700 hover:text-yellow-500 focus:outline-none"
          aria-label="Close"
          onClick={() => setVisible(false)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
// SampleArray component
let samplAarray=["manju", "something", 24, {username:"kethavath"}]
const SampleArray=()=>{

    return(
        <div>
            {/* <h2>{samplAarray[2]} is my age</h2> */}
            {/* <h2>{samplAarray[0]} is my name</h2> */}
            {samplAarray.map((item, index)=>(
                <div key={index}>
                    {typeof item === 'object' ? JSON.stringify(item):item.toString()}
                </div>
            ))}
        </div>
    )
}
export default Alert;
export { SampleArray };
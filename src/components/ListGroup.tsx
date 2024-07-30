// // import { Fragment } from "react";

// import { useState } from "react";

// // import { MouseEvent } from "react";
// function ListGroup() {
//   let items = ["New york", "India", "San Francisco", "Paris", "London"];
//   // let selectedIndex=0;
//   //hook function buitin function
//   const [selectedIndex, setSelectedIndex] = useState<number>(-1);
//   // arr[0] // variable(selectedIndex)
//   // arr[1] //updater function
//   // if (items.length === 0)
//   //   return (
//   //     <>
//   //       <h1>ListGroup</h1>
//   //       <p>No item found</p>
//   //     </>
//   //   );
//   // const message=items.length===0 ? <p>No item found</p>: null
//   // const getMessage=() =>{
//   //   items.length===0 ? <p>No item found</p>: null
//   // }
//   //even handler
//   // const handleClick= (event:MouseEvent) => console.log(event)
//   const handleClick = (index: number) => {setSelectedIndex(index);};
//   return (
//     <>
//       <h1>List Of Group</h1>
//       {items.length === 0 ? (
//         <p>No item found</p>
//       ) : (
//         <ul className="list-group">
//           {items.map((item, index) => (
//             <li
//               className={`list-group-item ${selectedIndex === index ? 'active' : ''}`}
//               key={item}
//               onClick={() => handleClick(index)}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// export default ListGroup;
// "list-group-item active"
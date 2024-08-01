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


      {/* <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
        <div classNameName="container-fluid">
          <a classNameName="navbar-brand" href="#">{title}</a>
          <button 
            classNameName="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="/home">{homeText}</a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="/about">{aboutText}</a>
              </li>
            </ul>
            <form classNameName="d-flex" role="search">
              <input 
                classNameName="form-control me-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
              />
              <button 
                classNameName="btn btn-outline-primary" 
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>  */}
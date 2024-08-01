import React, { useState, useEffect } from 'react';

const Example: React.FC=()=> {
    const [city, setCity] = useState("Nalgonda");
useEffect(()=>{
  console.log("city changed to:", city);
  return () => {
    console.log("Cleanup for city:", city);
  };
},[city])
  //  A Function to change the city(state)
  const changeCity = () => {
    if (city === "Nalgonda") {
      setCity("Hyderabad");
    } else {
      setCity("Miryalaguda");
    }
  };
  return (
    <div>
      <h1>I live in {city}</h1>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
}

export default Example


// const BooleanStateExample: React.FC = () => {
//   const [isVisible, setIsVisible] = useState<boolean>(true);

//   return (
//     <div>
//       {isVisible && <p>This is visible!</p>}
//       <button onClick={() => setIsVisible(!isVisible)}>
//         {isVisible ? "Hide" : "Show"} Text
//       </button>
//     </div>
//   );
// };

// export { Example, BooleanStateExample };
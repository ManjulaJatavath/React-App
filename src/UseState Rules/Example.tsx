import React, { useState } from 'react';

const Example: React.FC=()=> {
    const [city, setCity] = useState("Nalgonda");
    console.log(city)

    // setCity("Nalgonda") //simple  usestate uses and syntax
    // console.log(city)
  //  A Function to change the city(state)
  const changeCity = () => {
    if (city === "Nalgonda") {
      setCity("Hyderabad");
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
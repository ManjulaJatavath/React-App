import  { useState } from 'react'

// const TernaryOperatorUsage = () => {
//     const[sampleCondition]=useState(true)
//     // sampleCondition ? "This is True Statement": "I am False Statement" //ternary operator usage
//   return (
//     <div>
//         <h2> Hello {sampleCondition ? "This is True Statement": "I am False Statement"}</h2>
//     </div>
//   )
// }

// export default TernaryOperatorUsage;


const CoditionOperator=()=>{
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isNotification, setNotification] = useState(true);

  return (
    <section className="p-3 bg-gray-100 rounded-lg">
      <div className="mb-4">
          {isLoggedIn ? (<p className="text-green-600 font-semibold">Welcome back!</p>) : (<p className="text-red-600 font-semibold">Please sign in.</p>)}
      </div>
      <div>
        {isNotification && (<p className="text-blue-600 font-semibold mb-4">You have new notifications!</p>)}
      </div>
        <div className="space-y-2">
            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                Toggle Login Status
            </button>

            <button
              onClick={()=> setNotification(!isNotification)}
              className="px-4 mx-2 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
              Click On Notification
            </button>
        </div>
    </section>
);
};

export {CoditionOperator}

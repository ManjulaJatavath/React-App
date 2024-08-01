import './index.css';
// import TextForm from './components/TextForm';
import Nabar from './components/Nabar';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TextForm from './components/TextForm';
// import Counter from "./UseState Rules/Counter"; 
// import Greeting from "./components/Greeting"; 
// import Sample from "./components/Sample"; 
// import FirstComp from './PropsContainer/FirstComp'; 
// import ThirdComp from './PropsContainer/ThirdComp'; 
// import "./sample.css"; 
// import SecondCompo from './PropsContainer/SecondCompo';
// import FourthCompo from './PropsContainer/FourthCompo';
// import Example from './UseState Rules/Example';
// import CarCamo from './components/CarCamo';
// import Gallary from './components/Gallary';




// const user={
//   name:"Manju",
//   city:"Hyderabad",
//   area:"Dilsukhnagr"
// }
// const user1={
//   name:"Ravikethu",
//   city:"Nalgonda",
//   area:"Miryalaguda"
// }
// const myCar = {
//   make: "Toyota",
//   model: "Camry",
//   start: () => {
//     console.log("Car started");
//   }
// };

// function App() { //parent compo
//   return (
//     <div classNameNameName="container">
      {/* <ListGroup /> */}
      {/* <Sample />
      <Greeting firstname="Manjula" lastname="Jatavath" />
      <Counter />
      <h4>This is App css page</h4>
      <p classNameNameName="para">Sample page for nested components</p>
      <img
        src="https://th.bing.com/th/id/OIP.PcX5mOVMNF6P3LafvjBAUQAAAA?rs=1&pid=ImgDetMain"
        alt="Sample Image"
      />
      <FirstComp name={user.name} city={user.city} area={user.area} />   
      <SecondCompo User={user1} />
      <ThirdComp name="nandu" />
      <FourthCompo name="kethu" /> 
      <Example/>
      <CarCamo
        make={myCar.make}
        model={myCar.model}
        start={myCar.start}
      /> */}
      {/* <BooleanStateExample /> */}
      {/* <Gallary/> */}

      {/* <TextForm heading ="Enter The text to analyze below"/> */}
//     </div>
//   );
// } // child compo

// export default App;

//Props=Properties
// 1st component(parent) to data(comunication) into  2nd component(child) //only oneway
// child(2nd component) props are read only

//UseState Hook
// syntax
// Const[state, setState]=useState()

//UseEffect Hook
//useEffect(()=>{},[] ) //syntax
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         classNameNameName="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//         // {isLoggedIn ? (<AdminPanel />) : (<LoginForm />)}
//       />
//     </>
//   );
// }

function App() {
  return (
    // <>
    //   <Nabar title="PhonesMania" homeText="Home" aboutText="About" />
    //   <Home />
    //   <About />
    //   <div className="container mt-4">
    //     {/* <TextForm heading="Enter The text to analyze below" /> */}
    //   </div>
    // </>
    <Router>
    <div>
      <Nabar title={'PhonesMenia'} homeText={'Home'} aboutText={'About'} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
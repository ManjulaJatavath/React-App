
import './App.css';
import Counter from "./UseState Rules/Counter"; 
import Greeting from "./components/Greeting"; 
import Sample from "./components/Sample"; 
import FirstComp from './PropsContainer/FirstComp'; 
import ThirdComp from './PropsContainer/ThirdComp'; 
import "./sample.css"; 
import SecondCompo from './PropsContainer/SecondCompo';
import FourthCompo from './PropsContainer/FourthCompo';
import Example, { BooleanStateExample } from './UseState Rules/Example';



const user={
  name:"Manju",
  city:"Hyderabad",
  area:"Dilsukhnagr"
}
const user1={
  name:"Ravikethu",
  city:"Nalgonda",
  area:"Miryalaguda"
}

function App() { //parent compo
  return (
    <div className="container">
      {/* <ListGroup /> */}
      <Sample />
      <Greeting firstname="Manjula" lastname="Jatavath" />
      <Counter />
      <h4>This is App css page</h4>
      <p className="para">Sample page for nested components</p>
      <img
        src="https://th.bing.com/th/id/OIP.PcX5mOVMNF6P3LafvjBAUQAAAA?rs=1&pid=ImgDetMain"
        alt="Sample Image"
      />
      <FirstComp name={user.name} city={user.city} area={user.area} />   
      <SecondCompo User={user1} />
      <ThirdComp name="nandu" />
      <FourthCompo name="kethu" /> 
      <Example/>
      <BooleanStateExample />
    </div>
  );
} // child compo

export default App;

//Props=Properties
// 1st component(parent) to data(comunication) into  2nd component(child) //only oneway
// child(2nd component) props are read only

//UseState Hook
// syntax
// Const[state, setState]=useState()

//UseEffect Hook
//useEffect(()=>{},[] ) //syntax

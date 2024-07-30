
interface FirstCompProps {
    name: string;
    city: string;
    area: string;
    // age:number;
  }
const FirstComp:React.FC<FirstCompProps> = ({ name, city, area }) => {
// const {name, area, city} =props.User //Props Destructuring
    // console.log(props)
  return (
    <div>
      <h2>First Component</h2>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>Area: {area}</p>
    </div>
  )
}

export default FirstComp

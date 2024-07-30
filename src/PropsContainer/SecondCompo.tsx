

const SecondCompo = (props) => {
    const {name, area, city} =props.User
  return (
    <div>
      {name}
      {city}
      {area}
    </div>
  )
}

export default SecondCompo

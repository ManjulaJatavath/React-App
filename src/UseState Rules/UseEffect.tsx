import "../App.css";
const firstname = "Manjula";
const lastname = "Kethavath";
const currentDate = new Date().toLocaleDateString();
const currentYear = new Date().getFullYear();
const greeting = "Hello";
const customStyle = {
    color: "blue",
    fontSize: "20px",
    border: "1px solid black"
  };

function App() {
  return (
    <div>
      <h1 style={customStyle}>{greeting} Welcome, {firstname}!</h1>
      <p className='heading'>Today's date is {currentDate}.</p>
      <p className='paragraph'>It's the year {currentYear}.</p>
      <p>{`Your full name is ${firstname} ${lastname}`}</p>
      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        style={{ borderRadius: "50%" }} // style attribute for inline styles.
      />

    </div>
  );
}

export default App;

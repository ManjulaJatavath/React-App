import { useState } from "react";


interface StyleState {
  color: string;
  backgroundColor: string;
  border?: string;
}
const About = () => {
  // Initialize state
  const [myStyle, setMyStyle] = useState<StyleState>({
    color: 'black',
    backgroundColor: 'white',
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border:'2px solid white',
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        border:'2px solid black',
      });
      setBtnText("Enable Dark Mode");
    }
  };

  const toggleAccordion = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  };

  return (
    <div className="container mx-auto mt-4" style={myStyle}>
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <div className="border border-gray-300 rounded-lg">
        {/* Accordion Item #1 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full p-4 text-left focus:outline-none"
            type="button"
            onClick={() => toggleAccordion('collapseOne')}
          >
            Accordion Item #1
          </button>
          <div id="collapseOne" className="hidden p-4">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
        {/* Accordion Item #2 */}
        <div className="border-b border-gray-200">
          <button
            className="w-full p-4 text-left focus:outline-none"
            type="button"
            onClick={() => toggleAccordion('collapseTwo')}
          >
            Accordion Item #2
          </button>
          <div id="collapseTwo" className="hidden p-4">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
        {/* Accordion Item #3 */}
        <div>
          <button
            className="w-full p-4 text-left  focus:outline-none"
            type="button"
            onClick={() => toggleAccordion('collapseThree')}
          >
            Accordion Item #3
          </button>
          <div id="collapseThree" className="hidden p-4">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="my-3">
        <button 
          onClick={toggleStyle} 
          type="button" 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default About;

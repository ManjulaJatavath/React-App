
import  { useState } from 'react';


const TextForm = (props:any) => {
    const handleUpperCaseClick =()=>{
        console.log('UpperCase Was Clicked' + text)
        // setText("You have clicked on handleuppercaseclick")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowerCaseClick =()=>{
        console.log('LowerCase Was Clicked' + text)
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick =()=>{
        let newText='';
        setText(newText)
    }
    const handleOnChange =(event:any)=>{
        console.log('On change')
        setText(event.target.value)
    }

    const handleCopy =()=>{
      var text = document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces =()=>{
      let newtext = text.split(/[ ]+/)
      setText(newtext.join(" "))

    }


    const [text, setText] = useState('Enter Text Here!');
    // console.log(useState("Enter you text2"))
    // setText("Hello")
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows={3}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick} >Convert To Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick} >Convert To Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p >{0.008*text.split(" ").length} Mintes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}

export default TextForm

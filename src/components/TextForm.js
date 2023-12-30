import React,{useState} from "react";


export default function TextForm(props) {

  const handleUpClick = ()=> {
    console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!" ,"success");
  }
  const handleLowClick = ()=> {
    console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!" ,"success");
  }
  const handleOnChange = ()=> {
    console.log("On Change");
    setText(event.target.value);
  }
  const handleClear =()=>{
    console.log("cleared");
    setText('');
  }
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        props.showAlert("Text Copied to Clipboard!", "success");
      })
      .catch((err) => {
        props.showAlert("Failed to copy text to clipboard", "error");
        console.error('Unable to copy text to clipboard:', err);
      });
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
}

const [text , setText] = useState('');
  return (
    <>
    <div ClassName="container" style={{color: props.mode==='dark'?'white':'#043743' }}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#13466e':'white' ,
        color: props.mode==='dark'?'white':'#043743'}} id="myBox" rows="8"></textarea>
      </div>

      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyToClipboard}>
      
          Copy to Clipboard
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3 " style={{color: props.mode==='dark'?'white':'#043743'}}>
      <h2>Your Text Summary </h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length} words and {text.length} characters.</p>
      <p> {0.008*text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}



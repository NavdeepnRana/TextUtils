import React,{useState} from 'react'
// import PropTypes from 'prop-types'


export default function Textform(props) {
    const [text,setText] = useState('Enter the text');
    const [textStyle,setTextStyle] = useState({color:'black'});
    // text = "new text"; Wrong way to change the text
    // setText("new text"); Correct way to change the text

    const handleUpCase = ()=>{
        // console.log("UpperCase Was Clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase! ", "success");

    }
    
    const handleDownCase = ()=>{
        // console.log("LowerCase Was Clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleClearCase = ()=>{
        setText('');
    }

    const handleClipboard = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleChangeColor = ()=>{
        let a={color:'red'};
        setTextStyle(a);
    }
    
    const handleResetColor = ()=>{
        let a={color:'black'};
        setTextStyle(a);
    }
    const handleUPChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

  return (
    <>
    <div className='Container' style={{color: props.mode==='dark'?'white':'grey'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} style={{background: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'grey'}} onChange={handleUPChange}></textarea>
            <button className="btn btn-primary mt-2 mx-1 my-1" disabled={text.length===0}  onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary mt-2 mx-1 my-1" disabled={text.length===0}  onClick={handleDownCase}>Convert to LowerCase</button>
            <button className="btn btn-primary mt-2 mx-1 my-1" disabled={text.length===0}  onClick={handleClearCase}>Clear Text</button>
            <button className="btn btn-primary mt-2 mx-1 my-1" disabled={text.length===0}  onClick={handleClipboard}>Copy Text</button>
            <button className="btn btn-primary mt-2 mx-1 my-1" disabled={text.length===0}  onClick={handleChangeColor}>Change Colour</button>
            <button className="btn btn-primary mt-2 mx-1 my-1" disabled={text.length===0}  onClick={handleResetColor}>Reset Colour</button>
        </div>
    </div>

    <div className='Container my-3' style={{color: props.mode==='dark'?'white':'grey'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>

        <h2>Preview</h2>
        <p style={textStyle}>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}



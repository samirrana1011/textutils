import React,{useState} from 'react'

export default function TextUtilsForm(props) {
   
    const[text,setText]=useState('');

    const HandleClickEvent=()=>{
        let ToUpper=text.toUpperCase();
        setText(ToUpper);
        props.showAlert("Upper case done.","success");
        //console.log("Click event handle");
    }
    const HandleLowerClickEvent=()=>{
        let ToLower=text.toLowerCase();
        setText(ToLower);
        props.showAlert("Lower case done.","primary");
        //console.log("Click event handle");
    }
    const HandleClearClickEvent=()=>{
        setText('');
        props.showAlert("Clear.","danger");
        //console.log("Click event handle");
    }
    const HandleOnChnage=(event)=>{
        setText(event.target.value);
        //console.log("Click on chnage event");
    }
    const HandleCopyClickEvent=()=>{
        navigator.clipboard.writeText(text);
    }

    // const HandlePasteClickEvent=()=>{
    //     const ctext =  navigator.clipboard.readText();
    //      setText(ctext);   
    // }
    const HandleRemoveExtraSpacesClickEvent=()=>{
        let newText=text.split(/[ ]+/);
         setText(newText.join(" "));   
         
    }
   
    
    
    return (
        <>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
            <div className="mb-3">
                <label htmlFor="myText" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} id="myText" rows="8" style={{backgroundColor: props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} onChange={HandleOnChnage}></textarea>
            </div>
            <button className="btn btn-primary mx-2"  onClick={HandleClickEvent}>Convert to upper case</button>
            <button className="btn btn-primary mx-2" onClick={HandleLowerClickEvent}>Convert to lower lower</button>
            <button className="btn btn-primary mx-2" onClick={HandleRemoveExtraSpacesClickEvent}>Remove Extra Spaces</button>
            
            <button className="btn btn-success mx-2" onClick={HandleCopyClickEvent}>Copy to clipboard</button>
            {/* <button className="btn btn-success mx-2" onClick={HandlePasteClickEvent}>Paste Clipboard Data</button> */}
            <button className="btn btn-danger mx-2" onClick={HandleClearClickEvent}>Clear</button>
            
        </div>
        <div className="container my3" style={{color: props.mode==='light'?'black':'white'}}>
            <h2>Your text Summary</h2>
            <p>{text === "" ?0: text.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n /,"\n").split(" ").length } words and {text.length} characters.</p>
            <p>{ 0.008 * text.split(" ").length } Mintues read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview'}</p>
        </div>
        </>
    )
}


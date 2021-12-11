import React from 'react'

export default function Abouts(props) {

    // const [mystyle,setmyStle]=useState({
    //     color: 'white',
    //     backgroundColor : 'black',
    //     border : '1px solid white'
        
    // });
    // const [btnText, setBtnText] = useState("Enable Dark Mode")  
    let mystyle={
        color:props.mode==='dark'?'white':'black',
        backgroundColor:props.mode === 'dark'?'black':'white'
 
    }   
    // const HandleClickEvent=()=>{
    //     if(mystyle.color==="white")
    //     {
    //         setmyStle({
    //             color: 'black',
    //             backgroundColor : 'white',
                
    //         })

    //         setBtnText("Enable Dark Mode");
    //     }else
    //     {
    //         setmyStle({
    //             color: 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    // }
    return (
        <>
        <div className='container' style={mystyle}>
            <div className="accordion" id="accordionExample" >
                <h1 className='my-3'>About Us</h1>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={mystyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>
            </div>
          
        </div>
        </>
    )
}

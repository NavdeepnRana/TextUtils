import React from 'react'

export default function  About(props) {


    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
        // border : '2px solid',
        // borderColor : props.mode === 'dark' ? 'white' : '#343a40'
    }

    // const [myStyle,setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

//     const [btntext,setBtnText] = useState("Enable Dark Mode");

//     const toggleStyle=()=>{
//         if(myStyle.color==='white'){
//             setMyStyle({
//                 color: 'black',
//                 backgroundColor: 'white'
                
//         })
//         setBtnText("Enable Dark Mode");  
//     }
//     else{
//         setMyStyle({
//             color: 'white',
//             backgroundColor: 'black '
//         })
//         setBtnText("Enable Light Mode");  
//     }
// }

  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black',}}>
        <h1 className='my-3'>About us</h1>
            <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
                TextUtils is a free character counter text. TextUti1s reports the number of limit tool that words and provides instant characters. Thus character count & word count statistics for a given it is suitable for writing text with word/ character
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It uits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>

        {/* <div className="container my-2">
            <button onClick={toggleStyle} type="button" className='btn btn-primary'>{btntext}</button>
        </div> */}
    </div>
  )
}

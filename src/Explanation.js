import React, { useState } from 'react';

const Explanation = props => {
    const {info} = props
    
    const [showText, setShowText] = useState(false)   

        const toggleText = () =>{

            setShowText(!showText)
        }
 
    return(

        <div className = 'infoContainer'>

            {showText && <div id = 'text' className = 'text'>{info}</div>}

            <button id = "toggleInfo" onClick = {toggleText}>
            {showText ? 'Hide Text' : 'Show Text'}
            </button>
        </div>

    )

  
}

export default Explanation
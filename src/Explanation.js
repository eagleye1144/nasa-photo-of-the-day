import React, { useState } from 'react';
import styled from 'styled-components'

//best way to style below
const StyledExplanation = styled.div`
    color: ${pr => pr.theme.prymaryColor};

`
//not so good way to style below
const StyledButton = styled.button`
padding:1% 3%;
font-size: 1.6rem;
border-radius:6px;
border:2px solid #626262;
box-shadow: 2px 2px 1px #626262;
transition: 1.5s;
margin: ${pr => pr.theme.margin};

&:hover{
    background-color:#626262;
    border:2px solid white;
    color:white;
    box-shadow: 2px 2px 1px white;
}
`

//could also just do button {} for styling
const Explanation = props => {
    const {info} = props
    
    const [showText, setShowText] = useState(false)   

        const toggleText = () =>{

            setShowText(!showText)
        }
 
    return(

        <div className = 'infoContainer'>

            {showText && <StyledExplanation  id = 'text' className = 'text'>{info}</StyledExplanation>}

            <StyledButton id = "toggleInfo" onClick = {toggleText}>
            {showText ? 'Hide Explanation' : 'Show Explanation'}
            </StyledButton>
        </div>

    )

  
}

export default Explanation
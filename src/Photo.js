import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`

margin: ${pr => pr.theme.margin}

`

const Photo = props => {
    const {photoInfo} = props;

    return (
        <div className = 'photocontainer'>
            <StyledImg src = {photoInfo}/>
        </div>
    )


}

export default Photo;
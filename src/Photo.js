import React from 'react';

const Photo = props => {
    const {photoInfo} = props;

    return (
        <div className = 'photocontainer'>
            <img src = {photoInfo}/>
        </div>




    )


}

export default Photo;
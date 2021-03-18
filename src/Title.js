import React from 'react';

const Title = props =>{
    const {copyright, date, title} = props;


    return(
        <div className = "titleBar">
            <p>
                {copyright}
            </p>
            <p>
                {date}
            </p>
            <p>
                {title}
            </p>

        </div>
    )
}
export default Title;
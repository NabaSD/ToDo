import React from 'react';

function Button(props) {
    const { onClick, caption, disable, name} = props;
    return (
        <button className="m-r-20" name={name} onClick={onClick} disabled={disable}>{caption}</button>
    );
}

export default Button;
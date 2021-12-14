import './SportButton.css';
import { useState } from 'react';

const SportButton = function(props) {
    const alertMessage = function(event) {
        alert( `${event.target.textContent} is selected` );
    }

    return (
        <button onClick={alertMessage}>{props.label}</button>
    )
}

export default SportButton;
import './SportButton.css';
import { useState } from 'react';

const SportButton = function (props) {
  const { setButtonText } = props;
  let count = 0;
 
  const buttonList = props.sportData.map(sport => {
    count++;
    return (
      <button key={sport} 
      onClick={() => 
      setButtonText(`${sport}`)
      }>
        {sport}
      </button>
    );
  });

  return (<>
            {buttonList}
            <h1>Number of Buttons</h1>
            <h4>{count}</h4>
          </>);
};

export default SportButton;

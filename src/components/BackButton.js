import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <span className="back-button">
      <button onClick={browserHistory.goBack}>BACK</button>
    </span>
  )
}

export default BackButton;

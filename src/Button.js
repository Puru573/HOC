import React from 'react'
import HOC from './HOC';

function Button(props) {
    console.log("propsbuttons",props.style);
  return (
    <div style={props.style}>
      Hello...
    </div>
  )
}

export default HOC(Button)

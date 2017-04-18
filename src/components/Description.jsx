import React from 'react';

export default function Description(props){
  console.log('props' + props);
  return(
    <div>
      <h3>{props.category}</h3>
      <p>
        {props.description}
      </p>
    </div>
  );
}

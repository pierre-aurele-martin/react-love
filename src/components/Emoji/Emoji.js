import React from 'react';

const emoji = props => {
  
  const styles = {...props.styles} || {};
  styles.fontSize = props.fontSize ? props.fontSize : 'inherit';

  return (<span role="img" aria-label={props.label} style={styles} >
    {props.emoji}
  </span>
);
}

export default emoji;
import React from 'react';
import PropTypes from 'prop-types';

const emoji = props => {
  const styles = { ...props.styles } || {};
  styles.fontSize = props.fontSize ? props.fontSize : 'inherit';

  return (
    <span role="img" aria-label={props.label} style={styles}>
      {props.emoji}
    </span>
  );
};

emoji.propTypes = {
  emoji: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  styles: PropTypes.object
};

export default emoji;

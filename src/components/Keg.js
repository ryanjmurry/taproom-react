import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

const progressStyle = {
  height: '20px',
  color: 'red'
}

const Keg = (props) => {
  const keg = props
  const abv = parseInt(props.abv);
  const pintsRemaining = ((props.remaining / 124) * 100);
  return (
    <div>
      <LinearProgress 
        variant="determinate" 
        value={pintsRemaining}
      />
      {keg.name}
      {keg.brewer}
      {keg.description}
      {keg.abv}
      {keg.price}
      {keg.remaining}
      <hr/>
    </div>
  );
}

export default Keg;

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewer: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  remaining: PropTypes.string.isRequired
}

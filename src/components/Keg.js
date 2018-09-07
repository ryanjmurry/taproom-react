import React from 'react';
import PropTypes from 'prop-types';

const Keg = (props) => {
  const keg = props
  return (
    <div>
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

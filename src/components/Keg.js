import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';

const progressStyle = {
  height: '20px',
  margin: '20px'
}

const cardStyle = {
  margin: '20px'
}

const Keg = (props) => {
  const keg = props
  const abv = parseInt(props.abv);
  const pintsRemaining = ((props.remaining / 124) * 100);
  return (
    <div>
      <Card style={cardStyle}>
      <LinearProgress style={progressStyle}
        variant="determinate" 
        value={pintsRemaining}
      />
      <CardContent>
      {keg.name}
      {keg.brewer}
      {keg.description}
      {keg.abv}
      {keg.price}
      {keg.remaining}
      </CardContent>
      <CardActions>
        <div style={{ flex: 1 }}>
          <Button size="small" variant="contained" color="primary">Sell Pint</Button>
          <Button size="small">Sell Growler</Button>
          <Button size="small">Sell Large Growler</Button>
        </div>
        <div>
          <Button size="small"><Edit/></Button>
        </div>
      </CardActions>
    </Card>
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

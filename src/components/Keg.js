import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import { Tooltip } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';


const progressStyle = {
  height: '20px',
  margin: '20px'
}

const cardStyle = {
  margin: '20px auto',
  width: '800px'
}

const buttonStyle = {
  marginRight: '10px',
  backgroundColor: 'black',
  color: 'white'
}

const editButton = {
  backgroundColor: 'red',
  color: 'white'
}

const beerInfoHeader = {
  textAlign: 'center'
}

const beerInfoDescription = {
  textAlign: 'center'
}

const kegName = {
  fontSize: '30px'
}

const kegBrewer = {
  fontSize: '24px'
}

const kegPrice = {
  backgroundColor: 'green'
}



const Keg = (props) => {
  const keg = props;
  const abv = parseInt(props.abv);
  const pintsRemaining = ((props.remaining / 124) * 100);
  const pintsRemainingText = `${props.remaining} pints remaining`;
  return (
    <div>
      <Card style={cardStyle}>
      <Tooltip  
        title={pintsRemainingText}
        placement='left'
      >
        <LinearProgress style={progressStyle}
          variant='determinate' 
          value={pintsRemaining}
        />
      </Tooltip>
      <CardContent>
        <div>
          <Avatar style={kegPrice}>${keg.price}</Avatar>
        </div>
        <div style={beerInfoHeader}>
          <span style={kegName}>{keg.name}</span> <span style={kegBrewer}>by {keg.brewer}</span>
        </div>
        <div style={beerInfoDescription}>
          {keg.description}
          {keg.abv}
        </div>
      </CardContent>
      <CardActions>
        <div style={{ flex: 1 }}>
          <Button size='medium' variant='contained' style={buttonStyle}>Sell Pint</Button>
          <Button size='medium' variant='contained' style={buttonStyle}>Sell Growler</Button>
          <Button size='medium' variant='contained' style={buttonStyle}>Sell Large Growler</Button>
        </div>
        <div>
          <Button size='small' variant='fab' style={editButton}><Edit/></Button>
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

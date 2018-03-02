import React from 'react';
import {Link} from 'react-router-dom';

const BackButtons = (props) => {
  const buttonStyle = {
    border: 'solid #AAA 1px',
    textDecoration:'none',
    color: '#DDD',
    paddingTop:'2.5vh',
    marginTop: '10vh',
    height: '10vh'
  }
  return (
    <div className="row justify-content-around col-10">
      <Link to={props.back} className="buttonLink btn btn-lg col-5" style={buttonStyle}>Back</Link>
      <Link to="/" className="buttonLink btn btn-lg col-5" style={buttonStyle}>Home</Link>
    </div>
  )
}

export default BackButtons;

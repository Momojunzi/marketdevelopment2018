import React from 'react';
import {Link} from 'react-router-dom';

const lStyle = {
  textDecoration: 'none',
  color: '#3816bf',
}
const MainPageLink = (props) => {
  const thisClass = `${props.width} linkDiv`
  return (
    <div style={props.style} className={thisClass}>
      <Link to={props.linkName} style={lStyle} >
        <h1 className="link">{props.sectionName}</h1>
      </Link>
    </div>
  )
}

export default MainPageLink;

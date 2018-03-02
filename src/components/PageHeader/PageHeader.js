import React from 'react';

const headerStyle ={
  height: '15vh',
  paddingTop: '3vh',
  borderBottom: 'solid #3816bf 1px',
  //backgroundColor: "#f4d742",
  backgroundColor: "#AAA",
  color: '#3816bf',
}
const PageHeader = (props) => {
  return(
    <div style={headerStyle} className="row justify-content-center">
      <div className="row justify-content-center">
        <h1><b>{props.headerText}</b></h1>
      </div>
    </div>
  )
}

export default PageHeader;

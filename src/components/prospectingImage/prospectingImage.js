import React from 'react';

const pDivStyle = {
  backgroundColor: '#DDD',
  borderRadius: '5px',
  padding: '0'
}
const imgBtnStyle = {
  padding: '0'
}
const imgDivStyle = {
  padding: '0',
  backgroundColor: "white"
}
const imgStyle={
  minHeight: '68vh',
  maxHeight: '68vh'
}
const cityStyle = {
  paddingBottom: "5vh",
  color: '#3816bf'
}
const ProspectingImage = (props) => {
  return (
    <div className='row justify-content-around col-10'>
      <div className="col-12 row justify-content-center" style={cityStyle}>
        <h2><b>{props.city}</b></h2>
      </div>
      <div className="col-5 row justify-content-center" style={pDivStyle}>
        <button onClick={props.reverse} className="btn imgBtn">rev</button>
        <div className="col-10" style={imgDivStyle}>
          <img className="img-fluid" src={props.image} style={imgStyle}/>
        </div>
      </div>
      <div className="col-5 row justify-content-center" style={pDivStyle}>
        <div className="col-10" style={imgDivStyle}>ttt</div>
        <button onClick={props.forward} className="btn imgBtn">fwd</button>
      </div>

    </div>
  )

}

export default ProspectingImage;

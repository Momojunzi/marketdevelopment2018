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
  
  border: 'solid #3816bf 1px',
  paddingTop: "3vh",
  paddingBottom: "2vh",
  color: '#3816bf'
}
const h5Style = {
  height: '5vh',
}
const compStyle = {
  borderBottom: 'solid #DDD 1px'
}

const ProspectingImage = (props) => {
  const competitors = props.competitors.map(comp => {
    return(
      <tr style={compStyle}>
        <td>{comp.name}</td>
        <td>{comp.company}</td>
        <td>{comp.address}</td>
      </tr>
    )
  });
  const prospects = props.prospects.map(pros=>{
    return(
      <tr style={compStyle}>
        <td>{pros.name}</td>
        <td>{pros.address}</td>
      </tr>
    )
  })

  return (
    <div className='row justify-content-center col-10'>
      <div className="col-11 row justify-content-center" style={cityStyle}>
        <h2><b>{props.city}</b></h2>
      </div>

      <div className="col-12 row justify-content-center" style={pDivStyle}>
        <button onClick={props.reverse} className="btn imgBtn">rev</button>
        <div className="row justify-content-center col-10">
          <div className="col-12" style={imgDivStyle}>
            <img className="img-fluid" src={props.image} style={imgStyle}/>
          </div>
          <div className="col-12 row justify-content-around" style={pDivStyle}>
            <div className="col-12" style={imgDivStyle}>
              <hr />
              <h5 style={h5Style}><b>Competition</b></h5>
              <table className="table col-12">
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">company</th>
                    <th scope="col">address</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors}
                </tbody>
              </table>
            </div>
            <div className = "col-12" style={imgDivStyle}>

              <h5 style={h5Style}><b>Prospecting Area</b></h5>
              <hr />
              <p>Best Prospecting: {props.bestProspecting}</p>
              <hr />
            </div>

            <div className="col-12" style={imgDivStyle}>

              <h5 style={h5Style}><b>Prospects</b></h5>
              <table className="table col-12">
                <thead>
                  <tr>
                    <th scope="col">name</th>
                    <th scope="col">address</th>
                  </tr>
                </thead>
                <tbody>
                  {prospects}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button onClick={props.forward} className="btn imgBtn">fwd</button>
      </div>
    </div>
  )

}

export default ProspectingImage;

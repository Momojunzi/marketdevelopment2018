import React from 'react';

const AgentList = (props) => {
  const listStyle = {
    backgroundColor: 'white',
    border: 'solid black 1px',
    borderRadius: '5px',
    paddingTop:'2.5vh'
  }
  const list = props.list;
  const li = list.map(agent=>{
    return(
      <li className='text-left'>{agent.name}</li>
    )
  })
  console.log(list);
  return (
    <div className="col-5"style={listStyle} >
      <ul>
        <h2>{props.title}</h2>
        {li}
      </ul>
    </div>
  )
}

export default AgentList;

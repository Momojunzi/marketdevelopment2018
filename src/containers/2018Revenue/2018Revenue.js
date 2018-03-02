import React, {Component} from 'react';
import revenue2018 from '../../data/2018Revenue.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import BackButtons from '../../components/backButtons/backButtons.js';
import {Link} from 'react-router-dom';

class Revenue2018 extends Component {
  render() {
    const mainStyle = {
      paddingTop: '10vh',
      paddingBottom: '5vh',
      backgroundColor: '#DDD',
      minHeight: '85vh'
    }
    const tableStyle = {
      paddingLeft: '0px',
      paddingRight: '0px',
      backgroundColor: 'white',
      border: 'solid #3816bf 1px',
      borderRadius: '5px',
    }
    const rev = revenue2018.map(agent=>{
      return(
        <tr>
          <td>{agent["Agent"]}</td>
          <td>{agent["Consumer revenue"]}</td>
          <td>{agent["Commercial revenue"]}</td>
        </tr>
      )
    })

    return(
      <div>
        <PageHeader headerText="2018 Revenue" />
        <main >
          <div style={mainStyle} className="row justify-content-center">
            <div className="col-8" style={tableStyle}>
              <table className="table " >
                <thead>
                  <tr>
                    <th scope="col">Agent</th>
                    <th scope="col">Consumer Revenue</th>
                    <th scope="col">Commercial Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {rev}
                </tbody>
              </table>
            </div>
            <BackButtons back="/currentyear" />
          </div>
        </main>
      </div>
    )
  }
}

export default Revenue2018;

import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import BackButtons from '../../components/backButtons/backButtons.js';
import AgentList from '../../components/agentsList/agentsList.js';
import lostAgents from '../../data/lostAgents.js';
import addedAgents from '../../data/addedAgents.js';
import {Link} from 'react-router-dom';

class Changes extends Component {
  render() {
    const mainStyle = {
      paddingTop: '10vh',
      backgroundColor: '#DDD',
      minHeight: '85vh'
    }

    const list = lostAgents;
    return (
      <div>
        <PageHeader headerText="2017 Changes" />
        <main>
          <div style={mainStyle} className="row justify-content-center">
            <div className="col-10 row justify-content-around">
              <AgentList title='Lost Agents' list={lostAgents}/>
              <AgentList title='New Agents' list={addedAgents}/>
            </div>
            <BackButtons back="/2017"/>
          </div>
        </main>
      </div>
    )
  }
}

export default Changes;

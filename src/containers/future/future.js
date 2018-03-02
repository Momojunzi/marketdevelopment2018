import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import BackButtons from '../../components/backButtons/backButtons.js';

class Future extends Component {
  render(){
    const mainStyle = {
      paddingTop: '10vh',
      backgroundColor: '#DDD',
      minHeight: '85vh'
    }
    return(
      <div>
        <PageHeader headerText="The Future" />
        <main >
          <div style={mainStyle} className="row justify-content-center">

              <BackButtons back="/" />
          </div>
        </main>
      </div>
    )
  }
}

export default Future;

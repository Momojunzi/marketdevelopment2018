import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import MainPageLink from '../../components/MainPageLink/MainPageLink.js';
import BackButtons from '../../components/backButtons/backButtons.js';

class Component2017 extends Component {
  render() {
    const mainStyle = {
      paddingTop: '10vh',
      backgroundColor: '#DDD',
      minHeight: '85vh'
    }
    const linkStyle = {
      border: 'solid #3816bf 1px',
      borderRadius: '5px',
      //backgroundColor: 'rgba(244, 215, 66, 0.75)',
      height: '40vh',
      paddingTop: '15vh',
      color: '#3816bf',
    }

    return (
      <div>
        <PageHeader headerText="2017 Recap" />
        <main >
          <div style={mainStyle} className="row justify-content-center">
              <MainPageLink width='col-4' sectionName="2017 revenue" style={linkStyle} linkName="/2017/2017rev"/>
              <div className='col-1'></div>
              <MainPageLink width='col-4' sectionName="2017 changes" style={linkStyle} linkName="/2017/2017changes"/>
              <BackButtons back="/" />
          </div>

        </main>
      </div>
    )
  }
}

export default Component2017;

import React, {Component} from 'react';
import MainPageLink from '../../components/MainPageLink/MainPageLink.js';
import PageHeader from '../../components/PageHeader/PageHeader.js';
class Intro extends Component {
  render() {
    // const headerStyle ={
    //   height: '20vh',
    //   paddingTop: '5vh',
    //   borderBottom: 'solid #3816bf 1px',
    //   backgroundColor: "#f4d742",
    //   color: '#3816bf',
    // }
    const mainStyle = {
      paddingTop: '20vh',
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

    return(
      <div>
        <PageHeader headerText="Market Development Plan 2018" />
        <main >
          <div style={mainStyle} className="row justify-content-around">
            <MainPageLink width='col-3' sectionName="2017" style={linkStyle} linkName="/2017"/>
            <MainPageLink width='col-3' sectionName="Current Year" style={linkStyle} linkName="/currentyear"/>
            <MainPageLink width='col-3' sectionName="2018 Plan" style={linkStyle} linkName="/2018plan"/>
          </div>
        </main>

      </div>
    )
  }
}

export default Intro;

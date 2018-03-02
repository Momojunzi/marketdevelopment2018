import React, {Component} from 'react';
import PageHeader from '../../components/PageHeader/PageHeader.js';
import BackButtons from '../../components/backButtons/backButtons.js';

class Challenges2018 extends Component {
  render() {
    const mainStyle = {
      paddingTop: '10vh',
      backgroundColor: '#DDD',
      minHeight: '85vh',
      paddingBottom: '5vh'
    }
    const challengesStyle = {
      paddingTop:'5vh',
      paddingBottom: '5vh',
      backgroundColor:'white',
      border: 'solid #3816bf 1px'
    }
    const liStyle = {
      marginBottom: '2vh'
    }
    return (
      <div>
        <PageHeader headerText="2018 Challenges" />
        <main >
          <div style={mainStyle} className="row justify-content-center">
              <div className="row justify-content-center col-8 text-left" style={challengesStyle} >
                <ol className='col-10'>
                  <li style={liStyle}><b>Vehicle Theft</b>
                    <ul>
                      <li>Vallejo</li>
                      <li>All Home Depots</li>
                      <p>We continue to have vehicle theft problems at the Vallejo Home Depot.
                      We have suggested using clubs on vehicles, chaining up the towing equipment
                      etc. and that has helped with vehicle thefts as long as Home Depot associates
                      are cooperating. However, there are other issues such as battery and fuel thefts
                      that are difficult to control. While the Vallejo location has the worst problem
                      any Home Depot could potentially have this problem. The solution may be to replace
                      all of the Home Depot locations.</p>
                    </ul>
                  </li>
                  <li style={liStyle}><b>Inventory</b>
                    <ul>
                      <li>One Way Inventory</li>
                      <p>One way inventory is always a problem in the bay areaas we approach summer.
                      Nothing new here. With our new COM we will stay up to date on confirmation calls and
                      the consumer dead line</p>
                      <li>Local Inventory</li>
                      <p>With our continued efforts in iused truck sales local inventory will continue to
                      be a problem.  The solution is to confirm all reservations and focus inventory on high dollar
                      agents like Concord, San Mateo, Alum Rock.</p>
                    </ul>
                  </li>
                  <li style={liStyle}><b>Rental Supplies</b>
                    <ul>
                      <li>Plenty of handtrucks</li>
                      <li>Furniture pads are hard to keep in stock</li>
                    </ul>
                  </li>
                  <li style={liStyle}><b>Poor performing agents</b>
                    <ul>
                      <li>Richmond</li>
                      <li>Hollister</li>
                      <li>Sonoma</li>
                      <p>These three agents are all in less busy locations. One solution may be prospecting in
                      the area to try to find more business.  Then again there just might not be much agent business in
                      a location like Hollister or Point Richmond. As long as these locations are not sitting on assets
                      there is no real reason to close them.  I will make an action plan for each agent to explore new ideas
                      to increase sales.</p>
                    </ul>
                  </li>
                  <li style={liStyle}><b>Agent and Branch Relationships</b>
                    <ul>
                      <li>BRM visits to the agents</li>
                      <li>Counter associate visits to the agents</li>
                      <p>In the past there has been difficulty building relationships between the agents and the branches. However,
                      agent visits have been added to the personal objectives of the BRMs and there have allready been more
                      agent visits this year. I would like to take more counter associates on agent visits. </p>
                    </ul>
                  </li>
                </ol>
              </div>
              <BackButtons back="/currentyear" />
          </div>

        </main>
      </div>
    )
  }
}

export default Challenges2018;

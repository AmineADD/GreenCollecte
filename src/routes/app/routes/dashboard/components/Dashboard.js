import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import './styles.scss';
import ContainerStats from './Stats/ContainerStats';
import ContainerMap from './Map/ContainerMap';
import ContainerMarkers from './Stats/ContainerMarkers';
import Header from './Header/Header';


const Main = ({ connected }) => (
  <div className="col-md-12">
    <Header />
    <div className='row '>
      <div className='col-md-3'>
        <ContainerMarkers />
      </div>
      <div className={`col-md-${connected ? 6 : 9}`}>
        <ContainerMap />
      </div>
      {
        connected && (<div className='col-md-3'>
          <ContainerStats />
        </div>)
      }
    </div>
  </div >
);





const Dashboard = ({ db }) => {
  console.log(db, 'props db')
  return (
    <div className="container-fluid no-breadcrumb page-dashboard">
      <QueueAnim type="bottom" className="ui-animate">
        <Main connected={true} />
      </QueueAnim>
    </div>
  );
}
const mapStateToProps = state => ({
  headerValue: state.settings.headervalue,
  db: state.settings.fireStore,
});


export default connect(
  mapStateToProps
)(Dashboard);

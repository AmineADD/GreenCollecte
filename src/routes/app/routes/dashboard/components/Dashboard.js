import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import './styles.scss';
import ContainerStats from './Stats/ContainerStats';
import ContainerMap from './Map/ContainerMap';
import Header from './Header/Header';


const Main = ({ connected, database }) => (
  <div className="grid-structure">
    <Header />
    <div className="row">
      {
        connected && (<div className='col-md-3'>
          <ContainerStats />
        </div>)
      }
      <div className={`col-md-${connected ? 9 : 12}`}>
        <ContainerMap data={database} />
      </div>
    </div>
  </div>
);





const Dashboard = ({ db, user }) => {
  return (
    <div className="container-fluid no-breadcrumb page-dashboard">
      <QueueAnim type="bottom" className="ui-animate">
        <Main connected={!!user} database={db} />
      </QueueAnim>
    </div>
  );
}
const mapStateToProps = state => ({
  headerValue: state.settings.headervalue,
  db: state.settings.fireStore,
  user: state.settings.user
});


export default connect(
  mapStateToProps
)(Dashboard);

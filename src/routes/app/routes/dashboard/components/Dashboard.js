import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import './styles.scss';
import ContainerStats from './Stats/ContainerStats';
import ContainerMap from './Map/ContainerMap';
import Header from './Header/Header';


const Main = ({ connected, database, orga, radius }) => (
  <div className="grid-structure">
    <Header />
    <div className="row">
      {
        connected && (<div className='col-md-3'>
          <ContainerStats />
        </div>)
      }
      <div className={`col-md-${connected ? 9 : 12}`}>
        <ContainerMap data={database} center={orga} radius={radius} />
      </div>
    </div>
  </div>
);





const Dashboard = ({ db, user, organisation, radius }) => {
  const center = organisation.find((orga) => orga.displayName === localStorage.getItem('GOOGLE'));
  return (
    <div className="container-fluid no-breadcrumb page-dashboard">
      <QueueAnim type="bottom" className="ui-animate">
        <Main connected={!!user} database={db} orga={center} radius={radius} />
      </QueueAnim>
    </div>
  );
}
const mapStateToProps = state => ({
  headerValue: state.settings.headervalue,
  db: state.settings.fireStore,
  user: state.settings.user,
  organisation: state.settings.organisation,
  radius: state.settings.radius
});


export default connect(
  mapStateToProps
)(Dashboard);

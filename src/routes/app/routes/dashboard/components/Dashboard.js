import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import './styles.scss';
import ContainerStats from './Stats/ContainerStats';
import ContainerMap from './Map/ContainerMap';
import Header from './Header/Header';
import Typography from '@material-ui/core/Typography';


const Main = ({ connected }) => (
  <div className="grid-structure">
    <Header />
    <div className="row">
      {
        connected && (<div className='col-md-3'>
          <ContainerStats />
        </div>)
      }
      <div className={`col-md-${connected ? 9 : 12}`}>
        <ContainerMap />
      </div>
    </div>
  </div>
);





const Dashboard = ({ db }) => {
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

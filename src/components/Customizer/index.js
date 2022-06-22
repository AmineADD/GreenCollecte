import 'jquery-slimscroll/jquery.slimscroll.min';
import React from 'react';
import classnames from 'classnames';
import DEMO from 'constants/demoData';
import APPCONFIG from 'constants/appConfig';
import $ from 'jquery';
import GoogleConnected from './GoogleConnected';
import CreateOrganisationform from '../../routes/app/routes/dashboard/components/Form/CreateOrganisationForm';
import { connect } from 'react-redux';
import CreatePathWaste from '../../routes/app/routes/dashboard/components/Form/CreatePathWaste';

class Customizer extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: APPCONFIG.showCustomizer
    }
  }

  componentDidMount() {
    const quickviewInner = this.quickview;
    $(quickviewInner).slimscroll({
      height: '100%'
    });
  }

  toggleCustomizer = (e, close) => {
    e.preventDefault();
    if (close) {
      this.setState({
        isVisible: false
      })
    } else {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }
  }





  render() {

    const organisation = this.props.data.find((orga) => orga.displayName === localStorage.getItem('GOOGLE'));
    return (
      <section
        id="quickview-customizer"
        className={classnames('quickview-wrapper customizer d-none d-lg-block d-xl-block theme-light', {
          'quickview-open-customizer': this.state.isVisible
        })
        }
      >
        <a className="customizer-close" href={DEMO.link} onClick={(e) => this.toggleCustomizer(e, true)}>
          <span className="material-icons">close</span>
        </a>
        <a className="customizer-toggle" href={DEMO.link} onClick={(e) => this.toggleCustomizer(e)}>
          <span className="material-icons">settings</span>
        </a>

        <div className="quickview-inner" ref={(c) => { this.quickview = c; }}>
          <p className="customizer-header">Paramètres</p>
          <p className="small m-0">Bienvenue chez Green-collecte on vous propose solution 100% tech</p>
          <div className="text-right">
            <GoogleConnected />
          </div>

          <div className="divider my-4 divider-solid" />
          {
            (localStorage.getItem('GOOGLE') && (<CreateOrganisationform organisation={organisation} />))
          }

          <div className="divider my-4 divider-solid" />
          {
            (localStorage.getItem('GOOGLE') && (<CreatePathWaste />))
          }
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  data: state.settings.organisation,
});
export default connect(
  mapStateToProps,
  null
)(Customizer);

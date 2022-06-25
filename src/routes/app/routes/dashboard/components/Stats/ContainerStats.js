import React from 'react';
import { connect } from 'react-redux';
import BoxStat from './BoxStats';
const ContainerStats = ({ data, collect }) => {
    const organisation = data.find((orga) => orga.displayName === localStorage.getItem('GOOGLE'));
    const allDistance = collect ? collect.map(({ distance }) => distance).reduce((a, b) => a + b, 0).toFixed(2) : 0;
    return (

        <div className="container-fluid container-mw">
            <BoxStat value={organisation ? parseInt(organisation.nbWorkers) : 0} title={"équipes"} subTitle={""} icon={"supervisor_account"} iconColor={"info"} />
            <BoxStat value={organisation ? parseInt(organisation.nbTrucks) : 0} title={"Camions"} subTitle={""} icon={"local_shipping"} iconColor={"success"} />
            <BoxStat value={allDistance !== 0 ? (allDistance * 96.6 / 100).toFixed(2) : 0} title={"co2"} subTitle={"%"} icon={"opacity"} iconColor={"warning"} />
            <BoxStat value={allDistance} title={"parcourue"} subTitle={"KM"} icon={"room"} iconColor={"danger"} />
        </div>)
};

const mapStateToProps = state => ({
    data: state.settings.organisation,
    collect: state.settings.collect
});
export default connect(
    mapStateToProps,
    null
)(ContainerStats);
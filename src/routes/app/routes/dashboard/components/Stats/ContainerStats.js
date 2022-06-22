import React from 'react';
import { connect } from 'react-redux';
import BoxStat from './BoxStats';
const ContainerStats = ({ data }) => {
    const organisation = data.find((orga) => orga.displayName === localStorage.getItem('GOOGLE'));

    return (

        <div className="container-fluid container-mw">
            <BoxStat value={organisation ? parseInt(organisation.nbWorkers) : 0} title={"Workers"} subTitle={""} icon={"supervisor_account"} iconColor={"info"} />
            <BoxStat value={organisation ? parseInt(organisation.nbTrucks) : 0} title={"Trucks"} subTitle={""} icon={"local_shipping"} iconColor={"success"} />
            <BoxStat value={0} title={"O2"} subTitle={"%"} icon={"opacity"} iconColor={"warning"} />
            <BoxStat value={0} title={"Collecte"} subTitle={"KM"} icon={"room"} iconColor={"danger"} />
        </div>)
};

const mapStateToProps = state => ({
    data: state.settings.organisation,
});
export default connect(
    mapStateToProps,
    null
)(ContainerStats);
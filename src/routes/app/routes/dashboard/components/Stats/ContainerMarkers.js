import React from 'react';
import { connect } from 'react-redux';
import BoxStatCostum from './BoxStatCostum';
import BoxStat from './BoxStats';
import './PinStats.css'
const ContainerMarkers = ({ data }) => (
    <div className="row">
        <div className="col-md-3">
            <div className="box-body">
                <BoxStatCostum value={data ? data.filter((waste) => waste.idPassage === "").length : 0} title={"Disponible"} />
            </div>
        </div>
        <div className="col-md-3">
            <div className="box-body">
                <BoxStatCostum value={data ? data.filter((waste) => waste.idPassage !== "").length : 0} title={"Programmé"} color={"#00BCD4"} />
            </div>
        </div>
        <div className="col-md-3">
            <div className="box-body">
                <BoxStatCostum value={data ? data.filter((waste) => waste.priority === "élevé").length : 0} title={"Urgent"} color={"#EF5350"} />
            </div>
        </div>
        <div className="col-md-3">
            <div className="box-body">
                <BoxStat value={data ? data.length : 0} title={"Total"} subTitle={""} icon={"functions"} />
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    data: state.settings.fireStore,
});
export default connect(
    mapStateToProps,
    null
)(ContainerMarkers);
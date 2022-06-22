import React from 'react';
import BoxStatCostum from './BoxStatCostum';
import './PinStats.css'
const ContainerMarkers = () => (
    <div className="row">
        <div className="col-md-3">
            <div className="box-body">
                <BoxStatCostum value={0} title={"Disponible"} />
            </div>
        </div>
        <div className="col-md-3">
            <div className="box-body">
                <BoxStatCostum value={2} title={"en ramassage"} color={"#00BCD4"} />
            </div>
        </div>
        <div className="col-md-3">
            <div className="box-body">
                <BoxStatCostum value={0} title={"Lourds"} color={"#ffc107"} />
            </div>
        </div>
        <div className="col-md-3">
            <div className="box-body">
                <BoxStatCostum value={10} title={"urgent"} color={"#EF5350"} />
            </div>
        </div>
    </div>
);


export default ContainerMarkers;
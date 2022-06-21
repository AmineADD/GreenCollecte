import React from 'react';
import BoxStatCostum from './BoxStatCostum';
import './PinStats.css'
const ContainerMarkers = () => (
    <div className="box-body">
        <BoxStatCostum value={60} title={"Available"} />
        <BoxStatCostum value={60} title={"Pick up today"} color={"#00BCD4"} />
        <BoxStatCostum value={60} title={"Heavy"} color={"#ffc107"} />
        <BoxStatCostum value={60} title={"Not collected"} color={"#EF5350"} />
    </div>
);


export default ContainerMarkers;
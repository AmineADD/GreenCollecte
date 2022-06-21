import React from 'react';
import BoxStat from './BoxStats';
const ContainerStats = () => (

    <div className="box-body">
        <BoxStat value={60} title={"Workers"} subTitle={""} icon={"supervisor_account"} iconColor={"info"} />
        <BoxStat value={60} title={"Trucks"} subTitle={""} icon={"local_shipping"} iconColor={"success"} />
        <BoxStat value={60} title={"O2"} subTitle={"%"} icon={"opacity"} iconColor={"warning"} />
        <BoxStat value={60} title={"Collecte"} subTitle={"KM"} icon={"room"} iconColor={"danger"} />
    </div>
);


export default ContainerStats;
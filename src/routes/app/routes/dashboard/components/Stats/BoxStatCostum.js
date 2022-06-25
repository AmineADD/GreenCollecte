import React from 'react';
import PropTypes from 'prop-types';

const BoxStatCostum = ({ value, title, subTitle, color }) => (

    <div className="col-xl-12 col-sm-6">
        <div className="box box-default">
            <div className="box-top">
                <span>{value}<span className="size-h5">{subTitle}</span></span>
            </div>
            <div className="box-info">
                <span>{title}</span>
            </div>
            <div className="box-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <div style={{ top: '0', left: '0', margin: 'unset', position: 'unset', background: color }} className='pinStat'></div>
                </div>
            </div>
        </div>
    </div>
);


BoxStatCostum.propTypes = {
    value: PropTypes.number,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    color: PropTypes.string
};


export default BoxStatCostum;
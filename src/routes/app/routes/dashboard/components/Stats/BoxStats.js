import React from 'react';
import PropTypes from 'prop-types';

const BoxStat = ({ value, title, subTitle, icon, iconColor }) => (
    <div className="col-xl-12 col-sm-6"  >
        <div className="box box-default">
            <div className="box-top">
                <span>{value}<span className="size-h5">{subTitle}</span></span>
            </div>
            <div className="box-info">
                <span>{title}</span>
            </div>
            <div className="box-bottom">
                <i className={`material-icons color-${iconColor}`}>{icon}</i>
            </div>
        </div>
    </div>
);


BoxStat.propTypes = {

    title: PropTypes.string,
    subTitle: PropTypes.string,
    icon: PropTypes.string,
    iconColor: PropTypes.string,
};


export default BoxStat;
import React from 'react';
import './marker.css'
class Marker extends React.Component {
    render() {
        const { text } = this.props;
        return (
            <span onClick={this.handleExpandClick} className='pinContainer' title={text}>
                <div className='pin'></div>
                <div className='pulse'></div>
            </span>
        )
    }

}



export default Marker;
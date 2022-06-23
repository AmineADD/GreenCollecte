import React from 'react';
import DetailsMarker from './DetailsMarker';
import './marker.css'
class Marker extends React.Component {
    render() {
        const { text, color, nbPiece, src, weight, passage, date, priority, address } = this.props;
        return (
            <span className='qs' title={text}>
                <span className="popover above"> <DetailsMarker src={src} address={address} priority={priority} nbPiece={nbPiece} weight={weight} passage={passage} creationDate={date} /></span>
                <span className='pinContainer'>
                    <div className='pin' style={{ background: color }}></div>
                    <div className='pulse'></div>
                </span>
            </span>
        )
    }

}



export default Marker;
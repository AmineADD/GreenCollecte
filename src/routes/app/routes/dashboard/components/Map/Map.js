import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import Marker from './Marker';

class CollecteMap extends Component {
    getPrioritycolor = (prioriy, idPassage) => {
        if (idPassage !== "") {
            return "#00BCD4";// ramassage;
        }

        switch (prioriy) {
            case 'normale': break;
            case 'basse': break;
            default:
                return "#EF5350"; // rouge
        }
    }
    render() {
        const { markers } = this.props
        return (
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={{
                        lat: 48.783121,
                        lng: 2.382187
                    }}
                    defaultZoom={16}
                >
                    {markers ? markers.map(({ position, priority, idPassage, nbPiece, src, weight, date }, i) =>
                        <Marker
                            key={`${i}-map`}
                            {...position}
                            color={this.getPrioritycolor(priority, idPassage)}
                            text={"Encombrant"}
                            nbPiece={nbPiece}
                            src={src}
                            weight={weight}
                            passage={idPassage}
                            date={date}
                            priority={priority}
                        />
                    ) : null}
                </GoogleMapReact>
            </div>
        );
    }
}

export default CollecteMap;
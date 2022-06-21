import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


import Marker from './Marker';

class CollecteMap extends Component {
    render() {
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
                    <Marker
                        lng={2.381912}
                        lat={48.783412}
                        text="My position"
                    />

                    <Marker
                        lng={12.381912}
                        lat={48.783412}
                        text="My position"
                    />
                    <Marker
                        lng={2.381912}
                        lat={47.783412}
                        text="My position"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default CollecteMap;
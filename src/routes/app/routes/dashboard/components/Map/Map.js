import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';



const CollecteMap = ({ markers, orga, radius }) => {

    const [mapReference, setMapReference] = useState(null);
    const [mapsReference, setMapsReference] = useState(null);
    const [circle, setCercle] = useState(null);

    const getPrioritycolor = (prioriy, idPassage) => {
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

    const handleApiLoaded = (map, maps) => {
        setMapReference(map);
        setMapsReference(maps);
    };

    useEffect(() => {
        if (orga && mapReference && mapsReference) {
            if (circle) {
                circle.setMap(null);
            }
            const created = new mapsReference.Circle({
                strokeColor: '#3388ff',
                strokeOpacity: 0.6,
                strokeWeight: 2,
                fillColor: '#3388ff',
                fillOpacity: 0.3,
                map: mapReference,
                center: orga ? orga.position : {
                    lat: 48.783121,
                    lng: 2.382187
                },
                radius: radius,
            })
            setCercle(created);
        }
    }, [orga, radius, mapReference, mapsReference]);

    return (
        <div style={{ height: '90vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_apiKey }}
                defaultCenter={{
                    lat: 48.871707,
                    lng: 2.387546
                }}
                defaultZoom={13}
                yesIWantToUseGoogleMapApiInternals={true}
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            >
                {markers ? markers.map(({ position, priority, idPassage, nbPiece, src, weight, date, address }, i) =>
                    <Marker
                        key={`${i}-map`}
                        {...position}
                        color={getPrioritycolor(priority, idPassage)}
                        text={"Encombrant"}
                        nbPiece={nbPiece}
                        src={src}
                        weight={weight}
                        passage={idPassage}
                        date={date}
                        priority={priority}
                        address={address}
                    />
                ) : null}

            </GoogleMapReact>
        </div>
    );
}

export default CollecteMap;
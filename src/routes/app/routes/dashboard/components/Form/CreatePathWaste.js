import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CreateRadiusArea from './CreateRadiusArea';
import DEMO from '../../../../../../constants/demoData';
import database from '../../../../Firebase/Firebase';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
const CreatePathWaste = ({ radius, handleRadius, markers, center, nameCenter }) => {

    const [points, setPoints] = useState([]);
    const hanldeCalculPath = async () => {
        /** update wastes make as done */
        if (points.length > 0) {
            points.map(async ({ id }) => {
                const truksCollectionRef = doc(database, "wastes", id);
                await updateDoc(truksCollectionRef, { idPassage: "Programmé", priority: "basse" })
            })
            /** calculat trajet */
            await addDoc(collection(database, "collect"), {
                distance: points.map(({ distance }) => distance).reduce((a, b) => a + b, 0).toFixed(3),
            }).then(() => {
                console.log('collect done')
            });

        }

    }

    const arePointsNear = (checkPoint, centerPoint, km) => {
        var ky = 40000 / 360;
        var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
        var dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
        var dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
        return Math.sqrt(dx * dx + dy * dy) <= km;
    }

    useEffect(() => {
        if (markers) {
            setPoints(markers.filter((m) => m.idPassage === "" && arePointsNear(m.position, center, radius / 1000)).map((pin) => ({ ...pin, distance: parseFloat(DEMO.DistanceCalcul(pin.position.lat, center.lat, pin.position.lng, center.lng).toFixed(3)) })))
        }
    }, [markers, radius]);

    return (
        <article className="article">
            <div className="box box-default" >
                <div className="box-header"><Typography variant='title'>Proposition du passage</Typography></div>
                <div className="box-body py-5">
                    <CreateRadiusArea value={radius} handleRadiusChanges={handleRadius} header={<div className="box-header">les encombrants présent : <b>{points.length}</b></div>} />
                    {
                        points.length > 0 && (<div>
                            Destinations
                            <ul>
                                <li key={"start-Pos"}>Départ</li>
                                {points.map((p, i) =>
                                    <li key={i}>{p.address.split(', France')[0]} <br /> <b>{p.distance} KM</b></li>
                                )}
                                <li key={"return-Pos"}>{nameCenter}</li>
                            </ul>
                        </div>)
                    }
                    <Button onClick={hanldeCalculPath} variant="contained" color="primary" className="btn-w-md" fullWidth> Executer </Button>
                </div>
            </div>
        </article>
    )

}

export default CreatePathWaste;
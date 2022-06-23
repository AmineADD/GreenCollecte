import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import database from '../../../../Firebase/Firebase';
import { addDoc, collection } from 'firebase/firestore';

const CreateOrganisationform = ({ organisation }) => {

    const [position, setPosition] = useState(null);
    const [posLatLong, setPosLatLong] = useState({
        lng: 2.381912,
        lat: 48.783412
    });
    const [name, setName] = useState();
    const [nbTrucks, setNbTrucks] = useState(1);
    const [nbWorkers, setNbWorkers] = useState(1);
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const isDisabled = !!organisation;

    useEffect(() => {
        if (position) {
            geocodeByAddress(position.label)
                .then(results => getLatLng(results[0]))
                .then(({ lat, lng }) =>
                    setPosLatLong({ lat, lng })
                );
        }
    }, [position]);

    useEffect(() => {
        if (isSubmitted) {
            setPosition(null);
            setPosLatLong(null);
            setName(null);
            setError(false);
        }
    }, [isSubmitted])


    const handleSendToFirebase = async () => {
        if (name && posLatLong && nbTrucks && nbWorkers && !isDisabled) {
            await addDoc(collection(database, "organisation"), {
                name,
                displayName: localStorage.getItem('GOOGLE'),
                address: position ? position.label : '',
                position: posLatLong,
                nbTrucks: nbTrucks,
                nbWorkers: nbWorkers
            }).then(() => {
                setIsSubmitted(true);
            });
            console.log("done")
        } else {
            setError(error);
        }
    }

    return (
        <article className="article">
            <div className="box box-default" >
                <div className="box-header"><Typography variant='title'>Vos Informations</Typography></div>
                <div className="box-body py-5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nameOrganisation">Nom d'organisation</label>
                            <Input
                                id="poidsTextField"
                                placeholder="Mairie de vitry sur seine"
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                disabled={isDisabled}
                                defaultValue={organisation ? organisation.name : ''}
                            />
                        </div>
                        <div className="form-group">
                            {!isDisabled && (
                                <GooglePlacesAutocomplete
                                    apiKey={process.env.REACT_APP_apiKey}
                                    selectProps={{
                                        position,
                                        onChange: setPosition,
                                        placeholder: "Adresse",
                                    }}
                                />)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="nbTrucs">NB Camions</label>
                            <Input
                                id="nbTrucs"
                                type='number'
                                inputProps={{
                                    min: 1,
                                    max: 100
                                }
                                }
                                onChange={(e) => setNbTrucks(e.target.value)}
                                fullWidth
                                defaultValue={organisation ? organisation.nbTrucks : 1}
                                disabled={isDisabled}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nbWorkers">NB d'équipes</label>
                            <Input
                                id="nbWorkers"
                                type='number'
                                inputProps={{
                                    min: 1,
                                    max: 200
                                }
                                }
                                onChange={(e) => setNbWorkers(e.target.value)}
                                fullWidth
                                defaultValue={organisation ? organisation.nbWorkers : 1}
                                disabled={isDisabled}
                            />
                        </div>
                        {error && (<span className='text-danger m-2'>Error : SVP Vérifiez les champs</span>)}
                        <Button disabled={isDisabled} onClick={handleSendToFirebase} variant="contained" color="inherit" className="btn-w-md" fullWidth> Enregistrer </Button>
                    </form>

                </div>
            </div>
        </article>
    )

}

export default CreateOrganisationform;
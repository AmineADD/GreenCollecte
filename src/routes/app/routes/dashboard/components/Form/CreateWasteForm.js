import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { RadioGroup, Typography } from '@material-ui/core';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import database, { storage } from '../../../../Firebase/Firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';

const CreateWasteform = ({ onClose }) => {
    const [value, setValue] = useState('normale');
    const [position, setPosition] = useState(null);
    const [posLatLong, setPosLatLong] = useState({
        lng: 2.381912,
        lat: 48.783412
    });
    const [file, setFile] = useState(null);
    const [img, setImg] = useState();
    const [kg, setKg] = useState(null);
    const [nbPiece, setNbPiece] = useState(1);
    const [idPassage, setIdPassage] = useState();
    const [error, setError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
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
        if (file) {
            onUpload();
        }
    }, [file]);

    useEffect(() => {
        if (isSubmitted) {
            setKg(0);
            setNbPiece(0);
            setValue('normale');
            setImg(null);
            setIdPassage();
            setPosLatLong();
        }
    }, [isSubmitted])

    const onfilechange = (e) => {
        const upl = e.target.files[0];
        if (upl) {
            setFile(upl);

        }
    }
    const onUpload = async () => {
        const storageRef = ref(storage, file.name)
        uploadBytes(storageRef, file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImg(url);
            })
        })
    }



    const handleSendToFirebase = async () => {
        if (kg && nbPiece && value && img && posLatLong) {
            await addDoc(collection(database, "wastes"), {
                position: posLatLong,
                address: position ? position.label : '',
                idPassage: idPassage ? idPassage : "",
                priority: value,
                src: img,
                nbPiece,
                weight: kg,
                date: new Date()
            }).then(() => {
                setIsSubmitted(true);
            });
            onClose(false);
            console.log("done")
        } else {
            setError(error);
        }
    }

    return (
        <article className="article">
            <div className="box box-default" >
                <div className="box-header"><Typography variant='title'>Décaler un encombrant</Typography></div>
                <div className="box-body py-5">
                    <form>
                        <div className="form-group">
                            <label htmlFor="poidsTextField">Poids</label>
                            <Input
                                id="poidsTextField"
                                type='number'
                                inputProps={{
                                    min: 1,
                                    max: 200
                                }
                                }
                                placeholder="Kg"
                                onChange={(e) => setKg(e.target.value)}
                                fullWidth
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pieceTextField">Nombre de piece</label>
                            <Input
                                type='number'
                                inputProps={{
                                    min: 1,
                                    max: 10
                                }
                                }
                                defaultValue={1}
                                id="pieceTextField"
                                fullWidth
                                onChange={(e) => setNbPiece(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor='priority'>Priorité :</label>
                            <RadioGroup style={{ flexDirection: "row" }} aria-label="priorité" name="priority" value={value} onChange={handleChange}>
                                <FormControlLabel value="élevé" control={<Radio />} label="élevé" />
                                <FormControlLabel value="normale" control={<Radio />} label="normale" />
                                <FormControlLabel value="basse" control={<Radio />} label="basse" />
                            </RadioGroup>
                        </div>
                        <div className="form-group">
                            <GooglePlacesAutocomplete
                                apiKey={process.env.REACT_APP_apiKey}
                                selectProps={{
                                    position,
                                    onChange: setPosition,
                                    placeholder: 'Votre adresse'
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="icon-button-file">
                                {file ? file.name : "Ajoutez une photo"}
                                <input accept="image/*" style={{ display: 'none' }} id="icon-button-file" type="file" onChange={onfilechange} />
                                <IconButton color="primary" component="span" >
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="identifiant">N° de passage</label>
                            <Input
                                id="identifiant"
                                placeholder="Id : 098723243"
                                onChange={(e) => setIdPassage(e.target.value)}
                                fullWidth
                            />
                        </div>
                        {error && (<span className='text-danger m-2'>Error : SVP Vérifiez les champs</span>)}
                        <Button onClick={handleSendToFirebase} variant="contained" color="secondary" className="btn-w-md" fullWidth> Déclarer </Button>
                    </form>

                </div>
            </div>
        </article>
    )

}

export default CreateWasteform;
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { RadioGroup, Typography } from '@material-ui/core';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const CreateWasteform = () => {
    const [value, setValue] = useState('normale');
    const [position, setPosition] = useState(null);
    const [posLatLong, setPosLatLong] = useState(null);
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

    // eslint-disable-next-line
    const handleSendToFirebase = () => {
        if (posLatLong) {

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
                            {/* <GooglePlacesAutocomplete
                                apiKey=""
                                selectProps={{
                                    position,
                                    onChange: setPosition,
                                }}
                            /> */}
                        </div>
                        <div className="form-group">
                            <label htmlFor="icon-button-file">
                                Ajoutez une photo
                                <IconButton color="primary" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="identifiant">N° de passage</label>
                            <Input
                                id="identifiant"
                                placeholder="Id : 098723243"
                                fullWidth
                            />
                        </div>
                        <Button variant="contained" color="secondary" className="btn-w-md" fullWidth> Déclarer </Button>

                    </form>

                </div>
            </div>
        </article>
    )

}

export default CreateWasteform;
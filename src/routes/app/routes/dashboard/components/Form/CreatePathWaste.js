import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

const CreatePathWaste = ({ }) => {

    const hanldeCalculPath = () => {

    }

    return (
        <article className="article">
            <div className="box box-default" >
                <div className="box-header"><Typography variant='title'>chemin le plus court</Typography></div>
                <div className="box-body py-5">
                    <Button onClick={hanldeCalculPath} variant="contained" color="primary" className="btn-w-md" fullWidth> Executer </Button>

                </div>
            </div>
        </article>
    )

}

export default CreatePathWaste;
import React from 'react'
import Slider from '@material-ui/lab/Slider';

const CreateRadiusArea = ({ header, value, handleRadiusChanges }) => {

    const handleChange = (_, value) => {
        handleRadiusChanges(value)
    };

    return (<div className="box box-default">
        {header}
        <div className="box-body d-flex justify-content-center">
            <div style={{ width: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {value}m <Slider value={value} min={100} max={3000} step={25} onChange={handleChange} />
            </div>
        </div>
    </div>)
}

export default CreateRadiusArea;
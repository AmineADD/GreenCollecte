import React, { useState } from 'react';
import CollecteMap from './Map';

import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import ModalCostum from '../Modal/Modal';
import CreateWasteform from '../Form/CreateWasteForm';

const ContainerMap = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="col-xl-12">
            <div className="box box-default">
                <div className="box-body">
                    <div className="row">
                        <CollecteMap />
                    </div>
                    <div className='row' style={{
                        position: "absolute", top: 0, left: 0, marginLeft: '10px',
                        marginTop: '30px'
                    }}>
                        <div className="cta-btn">
                            <Button variant="fab" mini aria-label="add" onClick={() => setIsOpen(true)} >
                                <AddIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <ModalCostum isOpen={isOpen} onClose={setIsOpen} >
                <div className="box-body">
                    <CreateWasteform />
                </div>
            </ModalCostum>
        </div>
    )
};


export default ContainerMap;
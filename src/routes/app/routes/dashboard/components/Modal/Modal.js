import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


export default function ModalCostum({ isOpen, onClose, children }) {

    return (
        <Modal open={isOpen}
            onClose={() => onClose(false)}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}>
            <Fade in={isOpen}>
                <div className="col-xl-3 col-md-12 col-sm-6"  >
                    <div className="box-body">
                        <div className="box box-default" style={{ borderRadius: '20px' }}>
                            <div className="box-top">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Modal>
    );
}
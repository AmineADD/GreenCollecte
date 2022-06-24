import React, { useState } from "react";
import { connect } from 'react-redux';
import { authentification } from '../../routes/app/Firebase/Firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {
    ConnectFromGoogle
} from 'actions/settingsActions';
const GoogleConnected = ({ handleConnectGoogle }) => {

    const [display, setDisplay] = useState(localStorage.getItem('GOOGLE'));
    const provider = new GoogleAuthProvider();
    const signUPINGoogle = async () => {
        await signInWithPopup(authentification, provider)
            .then((res) => {
                localStorage.setItem('GOOGLE', res.user.displayName);
                setDisplay(res.user.displayName);
                handleConnectGoogle(res)
            }).catch((err) => {
                console.log(err, provider)
            })
    }
    const disconnect = () => {
        localStorage.removeItem('GOOGLE');
        setDisplay(null);
    }

    return (<div className="row">
        <div className="col-md-12">
            <button onClick={localStorage.getItem('GOOGLE') === null ? signUPINGoogle : disconnect} className="btn btn-outline-dark" style={{ textTransform: 'none' }}>
                <img width="20px" style={{ marginBottom: '3px', marginRight: "5px" }} alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                {display ? display : "Login with Google"}
            </button>
        </div>
    </div>)
}


const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    handleConnectGoogle: (user) => {
        dispatch(ConnectFromGoogle(user));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleConnected);
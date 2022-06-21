import React, { useEffect } from 'react';
import DEMO from 'constants/demoData';
import { connect } from 'react-redux';
import {
  databaseNotify
} from 'actions/settingsActions';

import database from '../../../routes/app/Firebase/Firebase'
import { collection, onSnapshot } from '@firebase/firestore';

const Footer = (props) => {

  useEffect(() => {
    const { handleDatabaseNotify } = props;
    const truksCollectionRef = collection(database, "Trucs")
    onSnapshot(truksCollectionRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        handleDatabaseNotify(doc.data())
      })
    })
  }, [])
  return (
    <section className="app-footer">
      <div className="container-fluid  text-center">
        <span className="float-left">
          <span>Copyright © <a className="brand" target="_blank" rel="noopener noreferrer" href={DEMO.productLink}>
            <span>Green - collect</span>
          </a></span>
        </span>
        <span className="float-right"  >
          <img width={25} height={25} alt='linkdin' src="assets\images-demo\logo.png" />
        </span>
      </div>
    </section>
  )
};

const mapStateToProps = state => ({
  db: state.settings.fireStore,
});

const mapDispatchToProps = dispatch => ({
  handleDatabaseNotify: (data) => {
    dispatch(databaseNotify(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

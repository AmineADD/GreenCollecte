import React, { useEffect } from 'react';
import DEMO from 'constants/demoData';
import { connect } from 'react-redux';
import {
  databaseNotify,
  CONNECT_ORGANISATION,
  handleGetCollect
} from 'actions/settingsActions';

import database from '../../../routes/app/Firebase/Firebase'
import { collection, onSnapshot } from '@firebase/firestore';

const Footer = ({ handleDatabaseNotify, handleCONNECT_ORGANISATION, handleGetCollect, db }) => {

  useEffect(() => {
    const truksCollectionRef = collection(database, "wastes");
    const OrganisationCollectionRef = collection(database, "organisation");
    const CollectCollectionRef = collection(database, "collect")
    onSnapshot(truksCollectionRef, (snapshot) => {
      const items = []
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
      })
      handleDatabaseNotify(items)
    });
    onSnapshot(OrganisationCollectionRef, (snapOrganist) => {
      const items = []
      snapOrganist.docs.forEach((docOrga) => {
        items.push(docOrga.data())
      })
      handleCONNECT_ORGANISATION(items)
    });
    onSnapshot(CollectCollectionRef, (snapCollect) => {
      const items = []
      snapCollect.docs.forEach((docCollect) => {
        const data = docCollect.data();
        items.push({
          distance: parseFloat(data.distance)
        })
      })
      handleGetCollect(items);
    });
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
  },
  handleCONNECT_ORGANISATION: (data) => {
    dispatch(CONNECT_ORGANISATION(data));
  },
  handleGetCollect: (data) => {
    dispatch(handleGetCollect(data))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

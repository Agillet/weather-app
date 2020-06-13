import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as localityActions from '../../redux/modules/locality/actions';

const SavedLocation = ({actions, storedCities}) => {
  useEffect(() => {
    actions.requestStoredCities();
  }, [actions]);
  return <View></View>;
};

const mapStateToProps = (state) => {
  return {
    storedCities: state.locality.storedCities,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        requestStoredCities: localityActions.requestStoredCities,
      },
      dispatch,
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedLocation);

const styles = StyleSheet.create({});

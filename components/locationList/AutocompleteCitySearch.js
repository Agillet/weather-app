import React from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as cityAutocompleteActions from '../../redux/modules/locality/actions';
import SuggestionList from './SuggestionList';

const AutocompleteCitySearch = ({actions, suggestions}) => {
  const [value, onChangeText] = React.useState('');

  const handleChange = (text) => {
    onChangeText(text);
    actions.requestAutocomplete(text);
  };

  const handlePress = (city) => {
    actions.addToStorage(city);
  };

  return (
    <View style={styles.modalContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={handleChange}
        value={value}
      />
      <SuggestionList suggestions={suggestions} handlePress={handlePress} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    suggestions: state.locality.autocompleteResults.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        requestAutocomplete: cityAutocompleteActions.requestCityAutocomplete,
        addToStorage: cityAutocompleteActions.addCityToStorage,
      },
      dispatch,
    ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AutocompleteCitySearch);

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    paddingTop: 50,
    backgroundColor: '#121212',
  },
  textInput: {height: 40, borderColor: 'gray', borderWidth: 1, color: '#FFF'},
});

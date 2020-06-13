import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import OpenLocationIcon from '../locationList/OpenLocationIcon';
import SavedLocation from './SavedLocation';

const CurrentLocation = ({city, setCitySearchModalOpen}) => {
  const [savedLocation, toggleSavedLocation] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableNativeFeedback
          style={{backgroundColor: 'red', width: '100%', height: '10px'}}
          onPress={() => toggleSavedLocation(!savedLocation)}>
          <Text style={styles.text}>{city}</Text>
        </TouchableNativeFeedback>
        <OpenLocationIcon setOpen={setCitySearchModalOpen} />
      </View>
      {savedLocation && <SavedLocation />}
    </>
  );
};

export default CurrentLocation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    position: 'absolute',
  },
  text: {color: '#FFF'},
});

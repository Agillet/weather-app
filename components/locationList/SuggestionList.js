import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const SuggestionList = ({suggestions = [], handlePress}) => {
  return (
    <View style={styles.container}>
      {suggestions.map((item) => (
        <View style={styles.labelContainer} key={item.locationId}>
          <TouchableHighlight onPress={() => handlePress(item)}>
            <Text style={styles.text}>{item.label}</Text>
          </TouchableHighlight>
        </View>
      ))}
    </View>
  );
};

export default SuggestionList;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  labelContainer: {
    padding: 15,
    borderStyle: 'solid',
    borderBottomWidth: 0.25,
    borderTopWidth: 0.25,
    borderColor: 'rgba(176, 179, 184, 0.5)',
  },
  text: {
    color: '#FFF',
  },
});

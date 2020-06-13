import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BottomSheetCard = ({title, titleRight = null, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {titleRight && <Text style={styles.titleRight}>{titleRight}</Text>}
      </View>
      {children}
    </View>
  );
};

export default BottomSheetCard;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: 'rgba(255,255,255, 0.2)',
  },
  title: {
    flexGrow: 1,
    color: '#FFF',
    fontSize: 20,
  },
  titleRight: {
    color: '#FFF',
    fontSize: 20,
  },
});

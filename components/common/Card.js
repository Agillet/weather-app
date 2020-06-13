import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({ height, children }) => {
  return (
    <View
      style={{
        height,
        ...styles.overlay,
      }}
    >
      {children}
    </View>
  );
};

export default Card;

Card.propTypes = {
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const styles = StyleSheet.create({
  overlay: {
    opacity: 0.85,
    backgroundColor: '#1F1B24',
    elevation: 1,
    borderRadius: 10,
    margin: 20,
  },
  container: {
    backgroundColor: '#121212',
  },
});

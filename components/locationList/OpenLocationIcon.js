import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {useSpring, animated} from 'react-spring/native';

const AnimatedIcon = animated(View);

const OpenLocationIcon = ({setOpen}) => {
  const [open, set] = React.useState(false);
  const [spring, setSpring] = useSpring(() => ({rotation: 0}));

  const handleTouch = () => {
    if (!open) {
      set(true);
      setSpring({rotation: 45 + 180});
      setOpen(true);
    } else {
      set(false);
      setSpring({rotation: 0});
      setOpen(false);
    }
  };

  return (
    <View style={{position: 'absolute', right: 10}}>
      <AnimatedIcon
        style={[
          styles.icon,
          {
            transform: [
              {
                rotate: spring.rotation.interpolate((e) => `${e}deg`),
              },
            ],
          },
        ]}>
        <TouchableWithoutFeedback onPress={handleTouch}>
          <FontAwesomeIcon icon={faPlus} color="#FFF" size={20} />
        </TouchableWithoutFeedback>
      </AnimatedIcon>
    </View>
  );
};

export default OpenLocationIcon;

const styles = StyleSheet.create({
  icon: {},
});

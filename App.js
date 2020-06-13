import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './redux/configureStore';

import {Provider} from 'react-redux';
import * as dayjs from 'dayjs';
import 'dayjs/locale/fr'; // import locale
import HomeScreen from './screens/HomeScreen';

dayjs.locale('fr');

const Stack = createStackNavigator();

export default function App(props) {
  const containerRef = React.useRef();

  return (
    <NavigationContainer ref={containerRef}>
      <Provider store={store}>
        <View style={styles.container}>
          {Platform.OS === 'ios' ? (
            <StatusBar barStyle="default" />
          ) : (
            <StatusBar translucent animated />
          )}
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              component={HomeScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
});

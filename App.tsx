import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import store, {RootState} from './src/store';
import {
  decrement,
  increment,
  asyncIncrement,
  asyncDecrement,
} from './src/store/modules/Stock';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontWeight: 'bold', color: 'black'},
  containerButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  textButton: {color: 'black'},
});

const App = () => {
  const {counter} = useSelector((state: RootState) => state.stock);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrement())}>
          <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(increment())}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(asyncDecrement())}>
          <Text style={styles.textButton}>sleep -</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(asyncIncrement())}>
          <Text style={styles.textButton}>sleep +</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

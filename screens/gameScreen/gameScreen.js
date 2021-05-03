import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, Button, ToastAndroid} from 'react-native';
import Card from '../../components/card/card';

import Colors from '../../constants/colors';

const generateRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min) + min);
  return random;
};

const showToast = (msg) => {
  ToastAndroid.show(msg, ToastAndroid.SHORT);
};

const GameScreen = (props) => {
  const currentLow = useRef(1);
  const currentHeigh = useRef(100);
  const [currentguss, setGuss] = useState(generateRandom(1, 100, props.userNo));

  const nextguss = (direction) => {
    if (
      (direction === 'lower' && currentguss < props.userNo) ||
      (direction === 'greater' && currentguss > props.userNo)
    ) {
      showToast('You are wrong');
      return;
    }
    if (direction === 'lower') {
      currentHeigh.current = currentguss;
    } else {
      currentLow.current = currentguss;
    }
    const next = generateRandom(currentLow.current, currentHeigh.current);
    setGuss(next);
    if (next === Number(props.userNo)) {
      showToast('You won');
      props.setUserno();
      return;
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.gameScreen}>
        <Text style={styles.game}>Opponenet Guss</Text>
        <Text style={styles.game}>{currentguss}</Text>
        <Card style={styles.buttonContainer}>
          <Button
            title="Lower"
            onPress={() => {
              nextguss('lower');
            }}
          />
          <Button
            title="Greater"
            onPress={() => {
              nextguss('greater');
            }}
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.primary,
  },
  gameScreen: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 100,
    width: '100%',
  },
  game: {
    width: 300,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;

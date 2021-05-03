import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Image,
} from 'react-native';

import Card from '../../components/card/card';
import Input from '../../components/input/input';
import Colors from '../../constants/colors';
import loadImg from '../../assets/won.png';

const StartScreen = (props) => {
  const [no, setNo] = useState('');

  const handleInput = (input) => {
    setNo(input.replace(/[^0-9]/g, ''));
  };

  const resetHandler = () => {
    setNo('');
    props.setConfirmed(false);
    setNo('');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <View source={loadImg} style={styles.screen}>
          <Text style={styles.title}> Start a new game </Text>
          <Card style={styles.inputContainer}>
            <Text>Select A Number</Text>
            <Input
              placeholder="Enter No"
              style={styles.input}
              onChangeText={handleInput}
              maxLength={2}
              value={no}
              keyboardType="number-pad"
            />
            <View style={styles.btnContainer}>
              <View style={styles.btn}>
                <Button title="Reset" color="red" onPress={resetHandler} />
              </View>
              <View style={styles.btn}>
                <Button
                  title="Confirm"
                  color="green"
                  onPress={() => {
                    props.onStart(no);
                  }}
                />
              </View>
            </View>
          </Card>
        </View>
        <View style={styles.wrapIt}>
          <View style={styles.imageWrapper}>
            <Image fadeDuration={1000} source={loadImg} style={styles.img} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  screen: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
  },
  input: {
    width: 100,
    textAlign: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  btn: {
    width: 100,
  },
  image: {
    width: '20%',
    height: '250p',
  },
  imageWrapper: {
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 5,
    borderColor: 'white',
    borderRadius: 200,
    width: '35%',
    height: '40%',
    borderWidth: 3,
  },
  wrapIt: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 300,
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
  },
});

export default StartScreen;

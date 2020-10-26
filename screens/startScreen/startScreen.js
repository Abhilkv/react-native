import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Card from '../../components/card/card';

const StartScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}> Start a new game </Text>
        <Card style={styles.inputContainer}>
          <Text>Select A Number</Text>
          <TextInput placeholder="Enter No" />
          <View style={styles.btnContainer}>
            <Button
              title="Reset"
              color="red"
              onPress={() => {
                console.log('value1');
              }}
            />
            <Button
              title="Confirm"
              color="green"
              onPress={() => {
                console.log('value2');
              }}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7287b',
  },
  screen: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 100,
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
});

export default StartScreen;

import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View} from 'react-native';

const TaksCreator = (props) => {
  const {addTasks} = props;
  const [value, setTask] = useState('');

  const setValue = (enteredText) => {
    setTask(enteredText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Tasks"
        style={styles.inputField}
        onChangeText={setValue}
      />
      <Button
        onPress={() => {
          addTasks(value);
        }}
        title="ADD "
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inputField: {
    width: '70%',
    paddingHorizontal: 10,
    backgroundColor: '#99FF95',
  },
  button: {
    width: '20%',
    backgroundColor: '#DDDDDD',
    padding: 15,
    marginLeft: 15,
  },
});

export default TaksCreator;

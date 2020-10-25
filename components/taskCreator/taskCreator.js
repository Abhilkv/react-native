import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Modal} from 'react-native';

const TaksCreator = (props) => {
  const {addTasks, resetTask, overlay, setOverlay} = props;
  const [value, setTask] = useState('');

  const setValue = (enteredText) => {
    setTask(enteredText);
  };

  const closeInput = () => {
    setOverlay(false);
    setTask('');
  };

  return (
    <Modal visible={overlay} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Tasks"
          style={styles.inputField}
          onChangeText={setValue}
          value={value}
        />
        <View style={styles.btnWrapper}>
          <View style={styles.btns}>
            <Button
              onPress={() => {
                addTasks(value);
              }}
              title="ADD "
              style={styles.button}
              color="green"
            />
          </View>

          <View style={styles.btns}>
            <Button
              onPress={() => {
                resetTask([]);
              }}
              title="RESET "
              style={styles.alertButton}
              color="green"
            />
          </View>

          <View style={styles.btns}>
            <Button
              onPress={closeInput}
              title="Close "
              style={styles.alertButton}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  inputField: {
    width: '80%',
    paddingHorizontal: 10,
    backgroundColor: '#99FF95',
  },
  btns: {
    width: '30%',
  },
});

export default TaksCreator;

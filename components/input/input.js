import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
  const {style} = props;
  return <TextInput {...props} style={{...styles.input, ...style}} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginVertical: 10,
    color: 'black',
    fontSize: 15,
  },
});

export default Input;

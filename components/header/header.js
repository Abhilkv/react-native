import React from 'react';
import {View, Text, StyleSheet, ImagePropTypes} from 'react-native';

const header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    paddingTop: 15,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 100,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
});

export default header;

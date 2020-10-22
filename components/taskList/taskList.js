import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const TaksList = (props) => {
  const {title} = props;

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#f5e7ba',
    marginTop: 10,
    padding: 10,
  },
});

export default TaksList;

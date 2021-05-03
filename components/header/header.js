import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../constants/colors';

const header = (props) => {
  return (
    <View style={styles.header}>
      <Icon name="rocket" size={30} color="#900" />
      <Text style={styles.headerTitle}>{props.title}</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    paddingTop: 15,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomRightRadius: 100,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
  },
});

export default header;

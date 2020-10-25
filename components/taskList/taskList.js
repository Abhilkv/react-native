import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TaksList = (props) => {
  const {title, id, removeTask} = props;

  return (
    <View style={styles.container} id={id} activeOpacity-={0.5}>
      <Text>{title}</Text>
      <MaterialCommunityIcons
        name="delete"
        size={20}
        color="red"
        onPress={() => {
          removeTask(id);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#f5e7ba',
    marginTop: 10,
    padding: 20,
  },
});

export default TaksList;

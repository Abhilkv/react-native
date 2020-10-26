import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 5,
    padding: 15,
    borderColor: 'white',
    borderRadius: 20,
  },
});

export default Card;

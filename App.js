import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './components/header/header';
import StartScreen from './screens/startScreen/startScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="ABHIL" />
      <StartScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

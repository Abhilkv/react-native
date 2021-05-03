import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Header from './components/header/header';
import StartScreen from './screens/startScreen/startScreen';
import GameScreen from './screens/gameScreen/gameScreen';

const App = () => {
  const [userno, setUserno] = useState();

  const startGameHandler = (selectedno) => {
    setUserno(selectedno);
  };

  let content = <StartScreen onStart={startGameHandler} />;

  if (userno) {
    content = <GameScreen userNo={userno} setUserno={setUserno} />;
  }

  return (
    <View style={styles.container}>
      <Header title="ABHIL" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

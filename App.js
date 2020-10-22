import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import TaksCreator from './components/taskCreator/taskCreator';
import List from './components/taskList/taskList';

const App = () => {
  const [taskList, addTasks] = useState([]);
  const addTaskOnClick = (task) => {
    addTasks((prevTask) => [
      ...prevTask,
      {id: Math.random().toString(), value: task},
    ]);
  };

  return (
    <View style={styles.container}>
      <TaksCreator addTasks={addTaskOnClick} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={(itemData) => <List title={itemData.item.value} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});

export default App;

import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Button} from 'react-native';
import TaksCreator from './components/taskCreator/taskCreator';
import List from './components/taskList/taskList';

const App = () => {
  const [taskList, addTasks] = useState([]);
  const [overlay, setOverlay] = useState(false);

  const addTaskOnClick = (task) => {
    addTasks((prevTask) => [
      ...prevTask,
      {id: Math.random().toString(), value: task},
    ]);
  };

  const removeTask = (idForDelete) => {
    addTasks((prev) => {
      return prev.filter((task) => task.id !== idForDelete);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Tasks"
        onPress={() => {
          setOverlay(true);
        }}
      />
      <TaksCreator
        addTasks={addTaskOnClick}
        resetTask={addTasks}
        overlay={overlay}
        setOverlay={setOverlay}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={taskList}
        renderItem={(itemData) => (
          <List
            id={itemData.item.id}
            title={itemData.item.value}
            removeTask={removeTask}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default App;

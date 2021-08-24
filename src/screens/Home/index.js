import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { addTask, deleteTask } from '../../store/actions';
import { navigation } from '@react-navigation/native';

export default HomeScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [text, setText] = useState('');

  const textBoxHandler = (textValue) => setText(textValue);
  const submitTask = () => dispatch(addTask(text));
  const removeTask = (item) => dispatch(deleteTask(item));

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TextInput placeholder="Add new task" onChangeText={textBoxHandler} />
      <TouchableOpacity onPress={submitTask}>
        <Text>Submit task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Task', item)}
            onLongPress={() => removeTask(item)}
          >
            <Text>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

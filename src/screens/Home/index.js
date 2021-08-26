import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { navigation } from '@react-navigation/native';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { addTask, deleteTask } from '../../store/actions';
import AppContext from '../../utils/AppContext';

const HomeScreen = () => {
  const { activeProfile, registeredUsers } = useContext(AppContext);
  const tasks = useSelector((state) => state.tasks);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const submitTask = () => dispatch(addTask(text));
  const removeTask = (item) => dispatch(deleteTask(item));

  const textBoxHandler = (textValue) => setText(textValue);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Active profile: {activeProfile}</Text>
      <Text>Registered Users: {registeredUsers}</Text>
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

export default HomeScreen;

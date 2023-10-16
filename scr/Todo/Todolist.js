import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Follow Oluwafisayomi.dev on Twitter.', completed: false },
    { id: 2, task: 'Learn Figma by 4pm.', completed: false },
    { id: 3, task: 'Coding at 9am.', completed: false },
    { id: 4, task: 'Watch Mr. Beast\'s Videos.', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      const newTaskItem = { id: newId, task: newTask, completed: false };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleTaskComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={{ backgroundColor: 'blue', height: 30, width: 30, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20 }}>+</Text>
          </View>
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1, marginLeft: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
          placeholder="Add a new task..."
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={handleAddTask}
        />
      </View>
      {tasks.map((task) => (
        <View
          key={task.id}
          style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        >
          <TouchableOpacity onPress={() => handleTaskComplete(task.id)}>
            <View style={{
              width: 20,
              height: 20,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: task.completed ? 'green' : 'black',
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              {task.completed && <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'green' }} />}
            </View>
          </TouchableOpacity>
          <Text style={{ flex: 1 }}>{task.task}</Text>
          <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
            <Text style={{ color: 'red' }}>del</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TodoList;

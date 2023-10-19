import { useMemo, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image  } from 'react-native';

import { styles } from './styles';
import { List } from '../../components/Todo';

import { Feather } from '@expo/vector-icons';

export type Task = {
  id: number;
  text: string;
  isChecked: boolean;
  toggleTaskCheck: (taskIdToBeChecked: number) => void;
}

export function Home() {
  const [newTaskValue, setNewTaskValue] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const checkedDataCounter = useMemo(() => {
    const filteredCheckedData = tasks.filter(item => item.isChecked);

    return filteredCheckedData.length;
  }, [tasks]);

  function handleRemoveTask(taskIdToBeRemoved: number) {
    Alert.alert("Remover", `Gostaria de remover essa task ?`, [
      {
        text: "Sim",
        onPress: () => setTasks(tasks.filter(task => task.id !== taskIdToBeRemoved))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleToggleTaskCheck(taskIdToBeChecked: number) {
    const immutableTasks = tasks.map(task => ({ ...task }));

    const taskToBeUpdated = immutableTasks.find(task => task.id === taskIdToBeChecked);

    if (taskToBeUpdated) {
      taskToBeUpdated.isChecked = !taskToBeUpdated.isChecked;
      setTasks(immutableTasks);
    }
  }

  function handleAddTask() {
    if (!newTaskValue) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      text: newTaskValue,
      isChecked: false
    }

    setTasks(oldTasks => [...oldTasks, newTask]);
    setNewTaskValue('')
  }

  return (
    <View style={styles.container}>

    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Image source={require('../../../assets/logo.png')} style={styles.logoImg} />
      </View>
      
      <View style={styles.form}>      
        <TextInput 
          style={isFocused ? {...styles.input, ...styles.focused } : styles.input}
          value={newTaskValue}
          onBlur={handleBlur}
          onFocus={handleFocus}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewTaskValue}
        />

        <TouchableOpacity style={!newTaskValue ? styles.buttonDisabled : styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            <Feather
              name="plus-circle" 
              size={20} 
              color="#F2F2F2"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.todoContainer}>
      <View style={styles.todoHeader}>
        <View style={styles.todoContent}>
          <Text style={styles.todoHeaderTextCreated}>
            Criadas 
          </Text>
          <View style={styles.todoHeaderInfo}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{tasks.length}</Text>
          </View>
        </View>

        <View style={styles.todoContent}>
          <Text style={styles.todoHeaderTextConcluded}>
            Concluídas
          </Text>
          <View style={styles.todoHeaderInfo}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>{checkedDataCounter}</Text>
          </View>
        </View>
      </View>

      {tasks.length == 0 && <View style={styles.separator} />}

      <List
        data={tasks}
        removeTask={handleRemoveTask}
        toggleTaskCheck={handleToggleTaskCheck}
      />
      </View>
    </View>
  );
}
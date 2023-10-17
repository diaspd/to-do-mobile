import { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image  } from 'react-native';

import { styles } from './styles';
import { Todo } from '../../components/Todo';
import { ClipboardList, PlusCircle } from 'lucide-react-native';

export function Home() {
  const [todo, setTodo] = useState<string[]>([]) 
  const [taskName, setTaskName] = useState('') 

  function handleAddTask() {
    if (taskName === '') {
      return
    }

    if (todo.includes(taskName)) {
      return Alert.alert("Task já existe", "Já existe uma task na lista com esse nome.")
    }
    
    setTodo(prevState => [...prevState, taskName]);
    setTaskName('')
  }

  function handleRemoveTask(name: string) {
    Alert.alert("Remover", `Gostaria de remover a task ${name}?`, [
      {
        text: "Sim",
        onPress: () => setTodo(prevState => prevState.filter(taskName => taskName !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

    <View style={styles.headerContainer}>
      <View style={styles.titleContainer}>
        <Image source={require('../../../assets/logo.png')} style={styles.logoImg} />
      </View>
      
      <View style={styles.form}>      
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6b6b6b"
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={!taskName ? styles.buttonDisabled : styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            <PlusCircle color="white" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={styles.todoContainer}>
      <View style={styles.todoHeader}>
        <Text style={styles.todoHeaderTextCreated}>
          Criadas 
          <View style={styles.todoHeaderInfo}>
            <Text style={{color: 'white'}}>{todo.length}</Text>
          </View>
        </Text>

        <Text style={styles.todoHeaderTextConcluded}>
          Concluídas
          <View style={styles.todoHeaderInfo}>
            <Text style={{color: 'white'}}>{todo.length}</Text>
          </View>
        </Text>
      </View>

      <View style={styles.separator} />

      <FlatList 
        data={todo}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Todo
            key={item} 
            name={item} 
            onRemove={() => handleRemoveTask(item)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyListDescription}>
          <ClipboardList color="#333333" size={65} />
         
          <Text style={styles.listEmptyText}>
          Você ainda não tem tarefas cadastradas {'\n'}
            Crie tarefas e organize seus itens a fazer.
          </Text>
          </View>
        )}
      />
      </View>
    </View>
  );
}
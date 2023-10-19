import { FlatList, View, Text } from "react-native";

import { Task } from "../../screens/Home";
import { Item } from "./Item";

import { styles } from "./styles";

import { Feather } from '@expo/vector-icons';

type Props = {
  data: Task[]
  removeTask: (taskIdToBeRemoved: number) => void;
  toggleTaskCheck: (taskIdToBeChecked: number) => void;
}

export function List({ data, removeTask, toggleTaskCheck }: Props) {
  return (
    <View>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <Item 
            item={item}
            removeTask={removeTask}
            toggleTaskCheck={toggleTaskCheck}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyListDescription}>
          <Feather 
            name="clipboard" 
            color="#333333" 
            size={65} 
          />
         
          <Text style={styles.listEmptyText}>
            Você ainda não tem tarefas cadastradas {'\n'}
            Crie tarefas e organize seus itens a fazer.
          </Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  )
}
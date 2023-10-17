import { Text, TouchableOpacity, View  } from 'react-native';

import { styles } from './styles';
import { Trash2 } from 'lucide-react-native';

type TaskProps = {
  name: string 
  onRemove: () => void
}

export function Todo({ name, onRemove }: TaskProps){
  return (
    <View style={styles.container}>
      

      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
            <Trash2 color="#808080" size={20} /> 
        </TouchableOpacity>
    </View>
  );
}
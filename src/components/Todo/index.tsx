import { ImageBackground, Text, TouchableOpacity, View  } from 'react-native';

import { styles } from './styles';
import { Trash2 } from 'lucide-react-native';

type TaskProps = {
  name: string 
  onRemove: () => void
  onAddConcluded: any
}

export function Todo({ name, onRemove, onAddConcluded }: TaskProps){
  return (
    <View style={styles.container}>
       <TouchableOpacity 
          style={styles.input}
          onPress={onAddConcluded}
        />

      <ImageBackground source={require('../../../assets/check.png')} resizeMode="cover" style={styles.image}>
        <TouchableOpacity 
          style={styles.image}
          onPress={onAddConcluded}
        />
      </ImageBackground>

      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
        <Trash2 color="#808080" size={20} /> 
      </TouchableOpacity>
    </View>
  );
}
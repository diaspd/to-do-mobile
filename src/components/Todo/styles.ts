import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 60,
    paddingHorizontal: 10,
  },
  input: {
    borderColor: '#4EA8DE',
    borderWidth: 2,
    height: 20,
    width: 20,
    borderRadius: 999,
  },
  image: {
    height: 28,
    width: 28,
    justifyContent: 'center',
  },
  name: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: '#FFF',
  },
  removeButton: {
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
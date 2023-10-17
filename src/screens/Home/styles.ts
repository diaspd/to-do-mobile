import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  headerContainer: {
    marginTop: 60,
    paddingHorizontal: 24,
    zIndex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  logoImg: {
    width: 125,
    height: 35,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    color: '#fff',
    padding: 16,
    fontSize: 16,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    gap: 12,
    marginBottom: 42,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4EA8DE',  
  },
  buttonDisabled: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  todoHeader: {
    marginTop: 50,
    flexDirection: 'row',
    padding: 6,
    textAlign: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoHeaderTextCreated: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  todoHeaderTextConcluded: {
    display: 'flex',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#8284FA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  todoHeaderInfo: {
    backgroundColor: '#333333', 
    marginTop: 5,
    paddingHorizontal: 8,
    fontWeight: 'bold',
    borderRadius: 12,
    textAlign: 'baseline',
  },
  separator: {
    borderWidth: 1,
    width: '99%',
    marginTop: 20,
    borderColor: '#262626',
    overflow: 'hidden',
  },
  todoContainer: {
    marginTop: -65,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
    flex: 1,
  },
  emptyListDescription: {
    alignItems: 'center',
    paddingTop: 48,
    marginBottom: 16
  },
  listEmptyText: {
    color: '#C4C4CC',
    marginTop: 16,
    fontSize: 14,
    textAlign: 'center',
  }
});
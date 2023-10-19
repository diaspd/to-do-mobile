import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    gap: 12,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    minHeight: 64,
    marginBottom: 8
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 18,
    width: 18,
    borderWidth: 2,
    borderRadius: 9,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  unchecked: {
    borderColor: '#4EA8DE'
  },
  checked: {
    borderColor: '#8284FA',
    backgroundColor: '#8284FA'
  },
  text: {
    lineHeight: 19,
    flexShrink: 1,
  },
  textUnchecked: {
    color: '#F2F2F2'
  },
  textChecked: {
    color: '#808080',
    textDecorationLine: 'line-through'
  },
  removeButton: {
    marginLeft: 'auto',
    height: 38,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
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
})
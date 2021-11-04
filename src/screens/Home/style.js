import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingBottom: 40
  },
  leftSection: {
    width: 250
  },
  rightSection: {
    width: '80%',
    marginTop: 50,
    marginLeft: 25
  },
  cardsContainer: {
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
})

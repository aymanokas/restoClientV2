import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%'
  },
  iconStyle: {
    marginRight: 7,
    fontSize: 10
  },
  textStyle: {
    color: Colors.black,
    width: 200
  },
  textContainer: {
    paddingVertical: 15,
    paddingLeft: 20
  },
  activeTextContainer: {
    backgroundColor: Colors.yellow,
    borderRadius: 10,
    paddingVertical: 15,
    paddingLeft: 20
  }
})

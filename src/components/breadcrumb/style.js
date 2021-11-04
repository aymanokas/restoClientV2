import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

export default StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryText: {
    color: Colors.grey,
    fontSize: 15,
    marginRight: 15
  },
  arrow: {
    color: Colors.grey,
    marginRight: 15,
    fontSize: 15
  },
  foodText: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})

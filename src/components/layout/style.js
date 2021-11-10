import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

export default StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  serverStatusContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    elevation: 10,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  serverStatusOn: {
    borderRadius: 20,
    height: 15,
    width: 15,
    backgroundColor: 'green',
    marginRight: 10
  },
  serverStatusOff: {
    borderRadius: 20,
    height: 15,
    width: 15,
    backgroundColor: 'red',
    marginRight: 10
  },
  serverStatusText: {
    fontSize: 10
  },
  safeAreaClass: {
    flex: 1,
    marginTop: 0
  }
})

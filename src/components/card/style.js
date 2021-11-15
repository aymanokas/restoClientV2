import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

export default StyleSheet.create({
  root: (checkout) => ({
    flexDirection: 'column',
    paddingVertical: 60,
    paddingHorizontal: 40,
    width: checkout ? '45%' : '30%',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginRight: checkout ? 0 : 10,
    backgroundColor: '#fff',
    shadowColor: '#0000004a',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 20
  }),
  topSection: {
    marginBottom: 15
  },
  bottomSection: {
    alignItems: 'center'
  },
  imageStyle: {
    height: 100,
    width: 180
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8
  },
  descriptionStyle: {
    color: Colors.grey,
    marginBottom: 15
  },
  priceStyle: {
    color: Colors.yellow,
    fontSize: 25
  },
  closeModalContainerStyle: {
    borderTopRightRadius: 40,
    position: 'absolute',
    elevation: 999,
    zIndex: 999,
    top: 0,
    right: 0,
    backgroundColor: '#D32626'
  },
  closeModalStyle: {
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  }
})

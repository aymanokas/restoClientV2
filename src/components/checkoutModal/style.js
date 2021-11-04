import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'

export default StyleSheet.create({
  modalBody: {
    flex: 1
  },
  leftSection: {
    position: 'absolute',
    zIndex: -1,
    elevation: -1,
    height: '100%',
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.6
  },
  rightSection: {
    position: 'absolute',
    right: 0,
    backgroundColor: 'white',
    height: '100%',
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  productImg: {
    height: 200,
    width: 300,
    marginBottom: 40
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 25
  },
  descriptionStyle: {
    color: Colors.grey,
    marginBottom: 25,
    fontSize: 15
  },
  priceStyle: {
    color: Colors.yellow,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40
  },
  topSection: {
    alignItems: 'center'
  },
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  addProductButton: {
    paddingHorizontal: 150,
    paddingVertical: 10,
    borderRadius: 13,
    backgroundColor: Colors.yellow
  },
  addProdcutTextStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },
  closeModalContainerStyle: {
    position: 'absolute',
    elevation: 999,
    zIndex: 999,
    top: 40,
    right: 30,
    backgroundColor: '#80808026',
    borderRadius: 5
  },
  closeModalStyle: {
    fontWeight: 'bold',
    padding: 10
  },
  variableContainer: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10
  },
  scrollViewVariables: {
    maxHeight: '30%'
  },
  variablesRoot: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 300
  }
})

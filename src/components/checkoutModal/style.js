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
  bottomSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -10
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 20
  },
  addProductButton: {
    paddingHorizontal: 150,
    paddingVertical: 10,
    borderRadius: 13,
    backgroundColor: Colors.yellow
  },
  addProductButtonDisabled: {
    paddingHorizontal: 150,
    paddingVertical: 10,
    borderRadius: 13,
    backgroundColor: Colors.white
  },
  addProdcutTextStyle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold'
  },
  addProdcutTextStyleDisabled: {
    color: 'black',
    fontSize: 15
  },
  closeModalContainerStyle: {
    position: 'absolute',
    elevation: 999,
    zIndex: 999,
    top: 25,
    right: 30,
    backgroundColor: '#80808026',
    borderRadius: 5
  },
  closeModalStyle: {
    fontWeight: 'bold',
    padding: 10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center'
  },
  checkbox: {
    alignSelf: 'center',
    width: 25,
    height: 25
  },
  checkboxLabel: {
    margin: 8,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: 'white',
    width: 50
  }
})

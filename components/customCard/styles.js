import {StyleSheet} from 'react-native';
export const Btnstyles = StyleSheet.create({
  main: {
    marginVertical: 30,
    backgroundColor: '#698AC7',
    borderRadius: 10,
    height: 325,
    //flexDirection: "row",
    alignContent: 'center',
    alignItems: 'flex-start',
    //opacity:0.7,
    //justifyContent: 'space-between',
    width: '90%',
  },
  innerBtn: {
    alignSelf: 'center',
    height: 50,
    width: 50,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  txt: {
    //marginTop: 5,
    fontFamily: 'Roboto',
    paddingLeft: 6,
  },
  icn: {
    color: 'white',
    fontSize: 20,
    //alignContent: "space-around",
    //justifyContent:'flex-end',
    //paddingRight:50,
    position: 'absolute',
    right: 20,
  },
});

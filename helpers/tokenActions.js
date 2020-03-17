import AsyncStorage from '@react-native-community/async-storage';

export const saveUserToken = async token => {
  try {
     
    await AsyncStorage.setItem('token', JSON.stringify(token));
    
  } catch (e) {
    
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (e) {
   
  }
};

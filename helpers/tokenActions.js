import AsyncStorage from '@react-native-community/async-storage';

export const saveUserToken = async token => {
  try {
      console.log(token)
    await AsyncStorage.setItem('token', JSON.stringify(token));
    console.log('token saved');
  } catch (e) {
    console.log('err Saving Token', e);
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (e) {
    console.log('errer', e);
  }
};

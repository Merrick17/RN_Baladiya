import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const CustomCard = () => {
  return (
    <View style={styles.body}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/trash.png')}
          style={styles.image}
        />
        <Text></Text>
      </View>
    </View>
  );
};

export default CustomCard;

const styles = StyleSheet.create({
  body: {
    width: '90%',
    height: 300,
    borderRadius: 15,
    backgroundColor: '#A6C1FF',
    marginTop: 10,
  },
  image: {
    height: 60,
    width: 60,
    alignSelf: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#A6C1FF',
    borderTopEndRadius:15,
    borderTopStartRadius:15
  },
});

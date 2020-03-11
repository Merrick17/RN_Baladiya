import {Icon, Input, Layout, Button} from '@ui-kitten/components';
import React from 'react';
import {View,StyleSheet,Image} from 'react-native'; 
const HomeScreen = (props) => (
  <Layout style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
     
      <Layout style={styles.login}>
      <Image source={require('../assets/recycle.png')} style={styles.logo}/>
      <Input
      style={styles.input}
      placeholder="Auth ID"
      //value={value}
      //onChangeText={setValue}
    />
     <Input
      style={styles.input}
      placeholder="Password"
      secureTextEntry={true}
      //value={value}
      //onChangeText={setValue}
    />
    <Button style={styles.btn}  status='danger' textStyle={{fontSize:20}} size={'large'} onPress={()=>{
        props.navigation.navigate('Main')
    }}>Sign in </Button>
      </Layout>
   
  </Layout>
);

export default HomeScreen;

const styles=StyleSheet.create({
    input:{
        paddingHorizontal:5,
        marginVertical:5,
        width:'90%'
    }, 
    logo:{
        width:150,
        height:150,
        alignSelf:'center',
        marginBottom:25
    },
    login:{
        marginTop:30
    },
    btn:{
        marginTop:25,
        fontSize:24
    }
})
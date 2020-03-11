import {Icon, Input, Layout, Button, RadioGroup,Radio} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

const AddUser = props => {
  const data = [{text: 'Driver'}, {text: 'Agent'}];
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onCheckedChange = index => {
    setSelectedIndex(index);
  };
  return (
    <Layout
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Layout style={styles.login}>
        <Input
          style={styles.input}
          placeholder="Name"
          //value={value}
          //onChangeText={setValue}
        />
        <Input
          style={styles.input}
          placeholder="First Name"
          //value={value}
          //onChangeText={setValue}
        />
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
        <Input
          style={styles.input}
          placeholder="Number Of Hours"
          //value={value}
          //onChangeText={setValue}
        />
        <RadioGroup selectedIndex={selectedIndex} onChange={onCheckedChange}>
          <Radio style={styles.radio} text="Driver" />
          <Radio style={styles.radio} text="Agent" />
        </RadioGroup>
        <Button
          style={styles.btn}
          status="danger"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            props.navigation.navigate('Main');
          }}>
          Add
        </Button>
        <Button
          style={styles.btn}
          status="success"
          textStyle={{fontSize: 20}}
          size={'large'}
          onPress={() => {
            props.navigation.navigate('Main');
          }}>
          Cancel
        </Button>
      </Layout>
    </Layout>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 5,
    marginVertical: 5,
    width: '90%',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 25,
  },
  login: {
    marginTop: 30,
  },
  btn: {
    marginTop: 25,
    fontSize: 24,
  },
});

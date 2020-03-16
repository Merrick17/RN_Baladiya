import {
  Icon,
  Input,
  Layout,
  Button,
  RadioGroup,
  Radio,
  Select,
} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
const AddBin = props => {
  let data = [];
  const state = useSelector(state => state);
  state.clusterState.forEach(elm => {
    let cluster = {
      text: elm.name,
      value: elm._id,
    };
    data.push(cluster);
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(data[0]);
  const onCheckedChange = index => {
    setSelectedIndex(index);
  };
  return (
    <Layout
      style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <Layout style={styles.login}>
        <Input
          style={styles.input}
          placeholder="Service Time"
          //value={value}
          //onChangeText={setValue}
        />
        <Input
          style={styles.input}
          placeholder="Nbr In Position "
          //value={value}
          //onChangeText={setValue}
        />
        <Select
          data={data}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
        <RadioGroup selectedIndex={selectedIndex} onChange={onCheckedChange}>
          <Radio style={styles.radio} text="Plastic" />
          <Radio style={styles.radio} text="Metallic" />
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

export default AddBin;

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

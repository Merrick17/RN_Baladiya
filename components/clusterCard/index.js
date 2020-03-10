import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Btnstyles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {Button} from 'react-native-elements';
import {Text} from 'galio-framework';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Layout} from '@ui-kitten/components';
export default CustomCard = props => {
  return (
    <View style={Btnstyles.main}>
      <View
        style={{
          marginHorizontal: 5,
          alignContent: 'flex-start',
          //marginRight: 250,
        }}>
        <View style={{flexDirection: 'row', marginVertical: 2}}>
          <Avatar size="small" source={require('../../assets/can_type.png')} />
          <Text color={'#56e39c'} style={Btnstyles.txt} size={20}>
            Type: Plastic
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 2}}>
          <Avatar size="small" source={require('../../assets/weight.png')} />
          <Text color={'#56e39c'} style={Btnstyles.txt} size={20}>
            Weight: Test
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 2}}>
          <Avatar size="small" source={require('../../assets/time.png')} />
          <Text color={'#56e39c'} style={Btnstyles.txt} size={20}>
            Service Time: Test
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 2}}>
          <Avatar size="small" source={require('../../assets/number.png')} />
          <Text color={'#56e39c'} style={Btnstyles.txt} size={20}>
            Number In position: Test
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 2}}>
          <Avatar
            size="small"
            source={require('../../assets/marker_green.png')}
          />
          <Text color={'#56e39c'} style={Btnstyles.txt} size={20}>
            Cluster: Test
          </Text>
        </View>
      </View>
      <TouchableOpacity style={Btnstyles.icn}>
        <Icon
          name="right"
          onPress={props.action}
          size={25}
          style={{color: 'white'}}
        />
      </TouchableOpacity>
    </View>
  );
};

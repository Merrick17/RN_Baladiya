import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Btnstyles } from "./styles";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "react-native-elements";
import { Text } from "galio-framework";
import LinearGradient from "react-native-linear-gradient";
export default BtnItem = props => {
  
  return (
    <View style={Btnstyles.main}>
      <Button
        icon={
        props.icon
        }
        title=""
        buttonStyle={Btnstyles.innerBtn}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ["#0a4dad", "#0a6bad"],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 }
        }}
      />
      <View style={{marginHorizontal:5,marginRight:120}}>
        <Text color={"#56e39c"} style={Btnstyles.txt} size={25}>
          {props.title}
        </Text>
       
      </View>
      <TouchableOpacity style={Btnstyles.icn}>
      <Icon name="right" onPress={props.action} size={25}  style={{color:'white'}}/>
      </TouchableOpacity>
     
    </View>
  );
};

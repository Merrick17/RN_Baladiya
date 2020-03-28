import Icon from 'react-native-vector-icons/Entypo';

import React from 'react';
const ExitIcon = props => {
  return (
    <Icon
      name="log-out"
      size={20}
      color="white"
      style={{alignSelf: 'center'}}
      onPress={() => {
        props.action;
      }}
    />
  );
};
export default ExitIcon;

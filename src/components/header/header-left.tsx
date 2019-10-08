import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HeaderLeft = props => (
  <TouchableOpacity style={{ marginHorizontal: 16 }} onPress={() => { console.log('Clicked'); }}>
    <Icon name="leftcircleo" size={32} color="#fff" />
  </TouchableOpacity>
);

export default HeaderLeft;

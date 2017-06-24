import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

let Title = (state) => {
  return (
    <View>
      <Text>TO-DOS ({state.todos.filter(t=>!t.completed).length})</Text>
    </View>
  );
};
Title = connect(state => state)(Title);


export default Title;
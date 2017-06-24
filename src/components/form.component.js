import React from 'react';
import { TextInput, Button, View } from 'react-native';
import { connect } from 'react-redux'
import { addTodo } from '../actions/';

let TodoForm = ({dispatch}) => {
  let input;

  return (
    <View>
      <TextInput type="text"
                 style={{height: 40, borderColor: 'gray', borderWidth: 2}}
                 onChangeText={(text) => input = text}
                 value={input}
      />
      <Button onPress={(e) => {
          e.preventDefault();
          dispatch(addTodo(input));
          input = '';
        }}
        title="Add"/>
    </View>
  );
};
TodoForm = connect(dispatch => dispatch)(TodoForm);

export default TodoForm;
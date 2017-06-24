import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem, CheckBox, Button } from 'native-base';

let Todo = ({onClick, completed, text}) => {
  return (
    <ListItem>
      <Text style={completed ? styles.withLine : styles.withoutLine
      }>
        {text}
      </Text>
      <CheckBox onPress={onClick}
                checked={completed}/>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  withLine: {
    textDecorationLine: 'line-through'
  },
  withoutLine: {
    textDecorationLine: 'none'
  },
});

export default Todo;
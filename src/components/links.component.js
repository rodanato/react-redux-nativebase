import React from 'react';
import { Button, View } from 'react-native';

let TodoLinks = ({onTodoClick}) => {
    return (
        <View>
            <Button onPress={()=> onTodoClick('SHOW_ALL')}
                    title="Show all"
          />
            <Button onPress={()=> onTodoClick('SHOW_COMPLETED')}
                    title="Show completed"
          />
            <Button onPress={()=> onTodoClick('SHOW_ACTIVE')}
                    title="Show active"
          />
        </View>
    );
};

export default TodoLinks;
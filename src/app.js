import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Form } from 'native-base';
import Title    from './components/title.component';
import TodoForm from './components/form.component';
import VisibleTodoList from './containers/visible-todo-list.container';
import VisibleTodoLinks from './containers/visible-todo-links.container';
// import './styles.css';

const TodoApp = () => (
  <Container>
    <Header>
        <Title />
    </Header>

    <Content>
       <Form>           
         <TodoForm />   
       </Form>

      <VisibleTodoList />
      <VisibleTodoLinks />
    </Content>
  </Container>
);

export default TodoApp;

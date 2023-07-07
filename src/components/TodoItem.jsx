import React from 'react';
import {StyledButton} from './StyledComp';
import {StyledPar01, StyledPar02} from './StyledComp';
import {StyledDiv01} from './StyledComp';


const TodoItem = ({toDo, description, action}) => {
    console.log('todo', toDo);

  return (
    <StyledDiv01 className="todo-item">
        <StyledPar01> ToDo: {toDo} </StyledPar01>
        <StyledPar02> DESCRIPTION: {description} </StyledPar02>

        <StyledButton onClick={() => action(toDo)}>Remove</StyledButton>
   </StyledDiv01>
  )
}

export default React.memo(TodoItem);
import React from 'react';

const List = props => (
    <ul>
        {
            props.todos.map((todo) => <li key={todo.toString()}>{todo}</li>)
        }
    </ul>
);

export default List;
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

const TodoList = props => {

  return (
    <div className="list">
      {props.todos.map(item => (
        <Todo key={item.id} item={item} _toggle={props._toggle} />
      ))}
      <button className="erase" onClick={props._reset}>
        Clear Completed Tasks!
      </button>
    </div>
  )
}

export default TodoList;
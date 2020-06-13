import React from 'react'

const Todo = props => {
  return (
    <div
      className={`item${props.item.completed ? ' completed' : ''}`}
      onClick={() => props._toggle(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  )
}

export default Todo
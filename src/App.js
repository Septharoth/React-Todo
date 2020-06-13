import React, { Component } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

const todos = [
  {
    name: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      todoList: todos,
    }
  }

  _toggle = id => {
    const newList = this.state.todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    })
    this.setState({
      todoList: newList
    })
  }

  handleChanges = e => {
    this.setState({
        todoText: e.target.value
    })
}

  handleSubmit = e => {
    e.preventDefault()
    this._add(this.state.todoText)
    e.target.reset()
}

  _add = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newItem]
    })
    console.log(this.state.todoList)
  }

  _reset = () => {
    this.setState({
      todoList: this.state.todoList.filter(element => (element.completed === false))
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log('rendering page')

    return (
      <div className="App">
        <header>
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} handleSubmit={this.handleSubmit} handleChanges={this.handleChanges} />
        </header>
        <TodoList
          todos={this.state.todoList}
          _toggle={this._toggle}
          _reset={this._reset}
        />
      </div>
    )
  }
}

export default App

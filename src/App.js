import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import TodoList from "./Components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    )
  }
}

export default App


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello world</p>
//       </header>
//     </div>
//   );
// }

// export default App;

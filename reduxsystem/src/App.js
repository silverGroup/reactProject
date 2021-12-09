import './App.css';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisableTodo'
import Footer from './components/Footer'
import ShowAsynclist from './containers/ShowAsynclist'
import ShowSagalist from './containers/ShowSagalist'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <VisibleTodoList />
        <Footer/>
        <div className="shopCart">
            redux-thunk　异步处理拿到的数据：
            <ShowAsynclist />
        </div>
        <div className="shopCart">
            redux-saga　异步处理拿到的数据：
            <ShowSagalist></ShowSagalist>
        </div>
      </header>
      
    </div>
  );
}

export default App;

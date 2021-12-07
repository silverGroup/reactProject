import './App.css';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisableTodo'
import Footer from './components/Footer'
import ShowAsynclist from './containers/ShowAsynclist'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo />
        <VisibleTodoList />
        <Footer/>
        <div className="shopCart">
            redux异步处理拿到的数据：
            <ShowAsynclist />
        </div>
      </header>
      
    </div>
  );
}

export default App;

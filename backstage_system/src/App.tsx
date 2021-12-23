import { useStore } from 'react-redux';
import AppRouters from './router/router';

function App() {
  const isLoggedIn=useStore().getState().userinfo.ticket;
  return (
    <AppRouters isLogin={isLoggedIn}/>
  );
}

export default App;

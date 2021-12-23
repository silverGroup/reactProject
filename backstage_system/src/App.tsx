import { useSelector, useStore } from 'react-redux';
import AppRouters from './router/router';
interface RootStateType{
    userinfo?:{
        ticket?:string
    }
}
function App() {
  const isLoggedIn=useSelector((state: RootStateType) =>{ return state.userinfo?state.userinfo.ticket:''})
  return (
    <AppRouters isLogin={isLoggedIn}/>
  );
}

export default App;

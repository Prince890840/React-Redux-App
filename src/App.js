import logo from './logo.svg';
import './App.css';
import CakeContainer from './Component/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Cakes/store';
import HooksCakeContainer from './Component/HooksCakeContainer';
import IceCreamContainer from './Component/IceCreamContainer';
import NewCakeContainer from './Component/NewCakeContainer';
import ItemContainer from './Component/ItemContainer';
import UserContainer from './Component/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;

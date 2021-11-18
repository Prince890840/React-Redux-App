import logo from './logo.svg';
import './App.css';
import CakeContainer from './Component/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Cakes/store';
import HooksCakeContainer from './Component/HooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer></HooksCakeContainer>
      </div>
    </Provider>
  );
}

export default App;

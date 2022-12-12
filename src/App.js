import { Provider } from 'react-redux';
import store from './redux/store';

import './App.scss';
import Header from './components/header/Header';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="app">
        <h1>Movie app</h1>
      </div>
    </Provider>
  );
}

export default App;

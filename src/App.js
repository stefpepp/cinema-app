import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Movie app</h1>
      </div>
    </Provider>
  );
}

export default App;

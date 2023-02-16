import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Details from './components/content/details/Details';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="app">
          <Switch>
            <Route path="/:id/:name/details" component={Details} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

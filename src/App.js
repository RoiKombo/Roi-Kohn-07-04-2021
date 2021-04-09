import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import WeatherPage from './components/WeatherPage';
import FavoritesPage from './components/FavoritesPage';
import store from './store';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/" component={WeatherPage} exact />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;

import { Provider } from 'react-redux';
import Header from './components/Header';
import WeatherPage from './components/WeatherPage';
import store from './store';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <WeatherPage />
      </div>
    </Provider>
  );
}

export default App;

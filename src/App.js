import './App.css';
import SearchEngine from './SearchEngine';

function App() {
  return (
    <div className="App">
     <h1>Weather app</h1>
     <SearchEngine />
     <footer>
       This page is created by YR and is <a href='https://github.com/littlerhubarb/weather-react'>open-sourced</a>
     </footer>
    </div>
  );
}

export default App;

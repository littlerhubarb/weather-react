import './App.css';
import Weather from './Weather';

function App() {
  return (  
  <div className="App">
  <div className='container'>
    <Weather defaultCity="Amsterdam"/>
     <footer>
       This page is created by YR and is <a href='https://github.com/littlerhubarb/weather-react' target="blank">open-sourced</a>
     </footer>
    </div>
    </div>
  );
}

export default App;

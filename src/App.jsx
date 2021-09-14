import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Price from './pages/Price';
import Contact from './pages/Contact';
import MainWrapper from './components/MainWrapper';

function App() {
  return (
    <div className="App">
      <MainWrapper>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/price' component={Price} exact />
          <Route path='/contact' component={Contact} exact />
        </Switch>
      </MainWrapper>
    </div>
  );
}

export default App;

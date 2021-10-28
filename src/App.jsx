import './App.css';
import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './pages/Home';
import Price from './pages/Price';
import Contact from './pages/Contact';
import MainWrapper from './components/MainWrapper';
import Matrials from './pages/Matrials';
import AboutPage from './pages/AboutPage/index';
import Teach from './pages/Teach/index';

// function App() {
//   return (
//     <div className="App">
//       <MainWrapper>
//         <Switch>
//           <Route path='/' component={Home} exact />
//           <Route path='/about' component={AboutPage} exact />
//           <Route path='/price' component={Price} exact />
//           <Route path='/contact' component={Contact} exact />
//           <Route path='/materials' component={Matrials} exact />
//           <Redirect to='/' />
//         </Switch>
//       </MainWrapper>
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainWrapper>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={AboutPage} exact />
            <Route path='/price' component={Price} exact />
            <Route path='/contact' component={Contact} exact />
            <Route path='/materials' component={Matrials} exact />
            <Route path='/teach' component={Teach} exact />
            <Redirect to='/' />
          </Switch>
        </MainWrapper>
      </div>
    )
  }
}
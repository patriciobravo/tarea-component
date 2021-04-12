import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';

import HomePage from "./pages/homepage/homepage.component";
import Pack from './pages/pack/pack.component';
import Camara from './pages/camara/camara.component';
import Brigada from './pages/brigada/brigada.component';
import Pase from './pages/pase/pase.component';
import Club from './pages/club/club.component'


function App() {
  return (
    <div>
      <Header/>
      <Switch>
            <Route exact path='/' component= {HomePage}/>
            <Route  path='/pack' component= {Pack}/>
            <Route  path='/camara' component= {Camara}/>
            <Route  path='/brigada' component= {Brigada}/>
            <Route  path='/pase' component= {Pase}/>
            <Route  path='/club' component= {Club}/>
          </Switch>
    </div>
  );
}

export default App;

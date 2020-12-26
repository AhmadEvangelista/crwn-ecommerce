import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
const JacketPage = () => {
  return (
    <div>
      <h1>Jacket PAGE</h1>
    </div>
  );
};
const SneakersPage = () => {
  return (
    <div>
      <h1>Sneakers PAGE</h1>
    </div>
  );
};
const WomensPage = () => {
  return (
    <div>
      <h1>Womens PAGE</h1>
    </div>
  );
};
const MensPage = () => {
  return (
    <div>
      <h1>Mens PAGE</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/shop/hats'>
          <HatsPage />
        </Route>
        <Route exact path='/shop/jackets'>
          <JacketPage />
        </Route>
        <Route exact path='/shop/sneakers'>
          <SneakersPage />
        </Route>
        <Route exact path='/shop/womens'>
          <WomensPage />
        </Route>
        <Route exact path='/shop/mens'>
          <MensPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

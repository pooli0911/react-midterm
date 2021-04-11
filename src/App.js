import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'

import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

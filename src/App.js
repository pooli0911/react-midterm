import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Cookie from './pages/Cookie'
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home/:pageName" component={Home}/>
          <Route path="/cookie" component={Cookie}/>
          <Route path="/cookie/:cookieStyle" component={Cookie}/>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

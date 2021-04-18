import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Cookie from './pages/Cookie'
import Team from './pages/Team'
import { StoreProvider } from "./store";


function App() {

  return (
    <div>
      <StoreProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home/:pageName" component={Home} />
            <Route path="/cookie" component={Cookie} />
            <Route path="/cookie/:cookieStyle" component={Cookie} />
            <Route path="/team" component={Team} />
          </Switch>
        </BrowserRouter>
      </StoreProvider >
    </div>
  );
}
export default App;
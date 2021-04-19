import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Cookie from './pages/Cookie'
import Team from './pages/Team'
import { StoreProvider } from "./store";
import Number from "./pages/Number"


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
            <Route path="/number" component={Number} />
          </Switch>
        </BrowserRouter>
      </StoreProvider >
    </div>
  );
}
export default App;
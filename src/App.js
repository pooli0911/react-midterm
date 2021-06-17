import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Cookie from './pages/Cookie'
import Team from './pages/Team'
import { StoreProvider } from "./store";
import Number from "./pages/Number"
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Order from './pages/Order'
import Change from './pages/Change'
import Event from './pages/Event'




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
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/order/:orderId" component={Order} />
            <Route path="/change" component={Change} />
            <Route path="/event" component={Event}/>
          </Switch>
        </BrowserRouter>
      </StoreProvider >
    </div>
  );
}
export default App;
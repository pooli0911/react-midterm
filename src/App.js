import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import Adventure from "./pages/Adventure"
import Battle from "./pages/Battle"
import Cookie from "./pages/Cookie"
import Kingdom from "./pages/Kingdom"
import PVP from "./pages/PVP"
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/adventure"component={Adventure}/>
          <Route path="/battle"component={Battle}/>
          <Route path="/cookie"component={Cookie}/>
          <Route path="/kingdom"component={Kingdom}/>
          <Route path="/pvp"component={PVP}/>
        </Switch>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;

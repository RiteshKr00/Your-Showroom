import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import BMW from './pages/BMW'
import Ford from './pages/Ford'
import Mercedes from './pages/Mercedes'
import RollsRoyce from './pages/RollsRoyce'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bmw' exact component={BMW} />
        <Route path='/ford' exact component={Ford} />
        <Route path='/mercedes' exact component={Mercedes} />
        <Route path='/rollsRoyce' exact component={RollsRoyce} />
      </Switch>

    </Router>
  );
}

export default App;

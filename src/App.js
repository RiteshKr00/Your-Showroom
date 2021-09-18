import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home"
import BMW from './pages/3DModelPage/BMW'
import Ford from './pages/3DModelPage/Ford'
import Mercedes from './pages/3DModelPage/Mercedes'
import RollsRoyce from './pages/3DModelPage/RollsRoyce'
import Chatbot from "./components/Chatbot/Chatbot"
import FordColor from './components/3DModelColor/FordColor'

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

        {/* Routes for Cars color */}
        <Route path='/fordColor' exact component={FordColor} />
      </Switch>

      <Chatbot />

    </Router>
  );
}

export default App;

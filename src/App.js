import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import SwitchRouter from './router/index'
import Template from './template'
import HomePage from './pages'

function App() {
  return (
    <Router>
      <Template>
        <HomePage/>
      </Template>
      <SwitchRouter/>
    </Router>
  );
}

export default App;

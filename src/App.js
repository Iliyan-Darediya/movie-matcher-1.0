import Main from "./components/Main";
import './App.css';
import { Switch,Link,Route } from "react-router-dom";

import NewSession from "./components/NewSession";
import Chooser from "./components/Chooser"
import Cheecker from "./components/Cheecker";
import ExistingSession from "./components/ExistingSession";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>App</h3>
        <ul>
          <li><Link to = "/">App</Link></li>
          <li><Link to = "/newSession">New Session</Link></li>
          <li><Link to = "/existingSession">Existing Session</Link></li>
        </ul>
        <Switch>
          <Route exact path = "/">
            <Main />
          </Route>
          <Route exact path = "/existingSession">
            <ExistingSession />
          </Route>
          <Route path = "/newSession">
            <NewSession />
          </Route>
          <Route path="/chooser">
            <Chooser />
          </Route>
          <Route path="/cheecker">
            <Cheecker />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;

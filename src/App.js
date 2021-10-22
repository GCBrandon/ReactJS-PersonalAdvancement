import './App.css';
import Nav from './Nav';
import Content from './Content';
import Add from './Add';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import View from './View';
import Delete from './Delete';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <Switch>
          <Route exact path="/">
              <Content/>
          </Route>
          <Route path="/add">
              <Add/>
          </Route>
          <Route path="/view/:id">
              <View/>
          </Route>
          <Route path="/delete/:id">
              <Delete/>
          </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;

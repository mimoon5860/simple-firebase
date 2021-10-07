import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/LogIn/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/SignUp'>
              <SignUp></SignUp>
            </Route>
            <Route path='/ResetPass'>
              <Login></Login>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

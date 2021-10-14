import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Booking from './Pages/Booking/Booking/Booking';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/login">
         <Login></Login>
       </Route>
       <PrivateRoute path="/booking/:serviceId">
         <Booking></Booking>
       </PrivateRoute>
       <Route exact path="*">
        <NotFound></NotFound>
       </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

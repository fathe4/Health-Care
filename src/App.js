import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/AboutPage/About';
import Contact from './Components/ContactPage/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/login/Login';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register';
import ServicesPage from './Components/ServicePage/ServicesPage';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <ServicesPage></ServicesPage>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

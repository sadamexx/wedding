
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Story from './components/Story';
import Wedding from './components/Wedding';
import Location from './components/Location';
import Registry from './components/Registry';




function App() {
  const {t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  return (
    <div >
      
      <NavBar handleClick={handleClick}/>
        <Switch>
          <Route exact path='/story' component={Story} />
          <Route exact path='/wedding' component={Wedding} />
          <Route exact path='/location' component={Location} />
          <Route exact path='/registry' component={Registry} />
          <Route path='/' component={Hero} />
        
        </Switch>
      <Footer />
      
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import {  BrowseRouter,Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import ConnectPage from'./Pages/ConnectPage/ConnectPage';
import Problem from './Pages/Problem/Problem';
import SelfHelpGroup from './Pages/SelfHelpGroup/SelfHelpGroup';
import Depression from './Pages/Problem/Depression/Depression'
import Anxiety from './Pages/Problem/Anxiety/Anxiety';
import Alcohol from './Pages/Problem/Alcohol/Alcohol';
import MentalHealth from './Pages/Problem/MentalHealth/MentalHealth';


function App() {
  return (
    
    <BrowserRouter>

    <Header/>
 

      <Routes>
        <Route exact path='/ConnectPage' element={<ConnectPage/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Problem' element={<Problem/>}/>
        <Route exact path='/Problem/Depression' element={<Depression/>}/>
        <Route exact path='/Problem/Anxiety' element={<Anxiety/>}/>
        <Route exact path='/Problem/Alcohol' element={<Alcohol/>}/>
        <Route exact path='/Problem/MentalHealth' element={<MentalHealth/>}/>
        <Route exact path='/SelfHelpGroup' element={<SelfHelpGroup/>}/>
      </Routes>
    </BrowserRouter>
     
     
   
    
  );
}

export default App;

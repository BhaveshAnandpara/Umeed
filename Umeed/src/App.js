import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar/SearchBar';
import {  BrowseRouter,Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home/Home';
import ConnectPage from'./Pages/ConnectPage/ConnectPage';
import Problem from './Pages/Problem/Problem';
import SelfHelpGroup from './Pages/SelfHelpGroup/SelfHelpGroup';


function App() {
  return (
    
    <BrowserRouter>

    <Header/>
 

      <Routes>
        <Route exact path='/ConnectPage' element={<ConnectPage/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Problem' element={<Problem/>}/>
        <Route exact path='/SelfHelpGroup' element={<SelfHelpGroup/>}/>
      </Routes>
    </BrowserRouter>
     
     
   
    
  );
}

export default App;

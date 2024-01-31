// import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './Components/AdminLogin';
import UserLogin from './Components/UserLogin';
import AdminSignUp from './Components/AdminSignUp';
import AdminHomePage from './Components/AdminHomePage';
//import AdminUploadVideo from './Components/AdminUploadVideo'
//import AdminVideoView from './Components/AdminVideoView'
import ErrorPage from './Components/ErrorPage';

function App() {
  return (
    <div className="App">
      {/* <h1><u></u>Project YouTube 😉</h1> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/*' element={<ErrorPage/>}/> {/* --> ( /* ) use to depict dynamic address (any address which is entered by client manually and outside of the project) random considered as wrong address will load you to error page if we don't do this then empty page is renderedd*/}
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/Register' element={<AdminSignUp/>}/>
        <Route path='/adminhomepage/*' element={<AdminHomePage/>}/>
        {/* <Route path='/adminhomepage/view' element={<AdminVideoView/>}/>
        <Route path='/adminhomepage/addVideo' element={<AdminUploadVideo/>}/>------> we can write like this also but it will be lengthy also ends up/turn out to be messing the project */ }
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

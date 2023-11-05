import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './NavigatinBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Dependency from './Pages/dependency';
import DFE from './Pages/DFE';
import PonManager from './Pages/pon_manager';
import Glide from './Pages/glide';
import PolesCivils from './Pages/poles_civils';
import EstimateSearch from './Pages/estimate_search';
import MissEstimates from './Pages/miss_estimates';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
      <NavigationBar/>
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/dependency' element={<Dependency />}></Route>
          <Route path='/dfe' element={<DFE/>}></Route>
          <Route path='/pon_manager' element={<PonManager />}></Route>
          <Route path='/glide' element={<Glide/>}></Route>
          <Route path='/poles_civils' element={<PolesCivils/>}></Route>
          <Route path='/estimate_search' element={<EstimateSearch/>}></Route>
          <Route path='/miss_estimates' element={<MissEstimates/>}></Route>
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}

export default App;

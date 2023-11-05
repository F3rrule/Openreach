import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Dependency from './dependency';
import DFE from './DFE';
import PonManager from './pon_manager';
import Glide from './glide';
import PolesCivils from './poles_civils';
import EstimateSearch from './estimate_search';
import MissEstimates from './miss_estimates';
import NavigationBar from './NavigationBar';

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

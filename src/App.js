import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Itinearar from './components/Itinearar';
import Order from './components/Order';
import Drivers from './components/Drivers';
import Buses from './components/Buses';
import ParcOwner from './layouts/ParcOwner';


import Login from './screens/Login';
import Register from './screens/Register';

import Parents from './components/Parents';
import SchoolOwner from './layouts/SchoolOwner';
import Allitineraries from './components/Allitineraries';
import Setitinerar from './components/Setitinerar';
import Additinerar from './components/Additinerar';


function App() {
  return (
      <BrowserRouter>
      <Routes>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      
      
      <Route path='/parcowner' element={<ParcOwner/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='itineraries' element={<Allitineraries/>}/>
        <Route path='Itinerar/:id' element={<Itinearar/>}/>
        <Route path='orders' element={<Order/>}/>
        <Route path='drivers' element={<Drivers/>}/>
        <Route path='buses' element={<Buses/>}/>
        
        <Route path='test' element={<Setitinerar/>}/>
        
      </Route>

      <Route path='/school' element={<SchoolOwner/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='itinerar' element={<Itinearar/>}/>
        <Route path='parents' element={<Parents/>}/>
      </Route>
      
        
      
      
        
        
      </Routes>
      </BrowserRouter>
       
    
  );
}

export default App;

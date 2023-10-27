
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Loyout';
import LandingPage from './pages/LandingPage';
import Transactions from './pages/Transactions';



function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/transactions' element={<Transactions />}/>
          <Route path='/' element={<LandingPage />}/>
        </Route>
     </Routes>
  );
}

export default App;

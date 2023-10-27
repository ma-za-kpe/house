
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Loyout';
import LandingPage from './pages/LandingPage';



function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Homepage />}/>
          <Route path='/' element={<LandingPage />}/>
        </Route>
     </Routes>
  );
}

export default App;

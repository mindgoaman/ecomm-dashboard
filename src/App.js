import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './webpages/RegistrationPage';
import LoginPage from './webpages/LoginPage';
import AddProductPage from './webpages/AddProductPage';
import UpdateProductPage from './webpages/UpdateProductPage';
import LogoutPage from './webpages/LogoutPage';

function App() {

   return (
      <Router>
         <Routes>
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/add' element={<AddProductPage />} />
            <Route path='/update' element={<UpdateProductPage />} />
            <Route path='/logout' element={<LogoutPage />} />
         </Routes>
      </Router>
   );
}

export default App;

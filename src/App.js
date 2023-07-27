import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import RegistrationPage from './webpages/RegistrationPage';
import LoginPage from './webpages/LoginPage';
import AddProductPage from './webpages/AddProductPage';
import UpdateProductPage from './webpages/UpdateProductPage';


function App() {

   return (
      <Router>
         <div className="App">
            <Header />
         </div>
         <Routes>
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/add' element={<AddProductPage />} />
            <Route path='/update' element={<UpdateProductPage />} />
         </Routes>
      </Router>
   );
}

export default App;

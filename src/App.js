import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationPage from './webpages/RegistrationPage';
import LoginPage from './webpages/LoginPage';
import AddProductPage from './webpages/AddProductPage';
import UpdateProductPage from './webpages/UpdateProductPage';
import ProtectedComponent from './component/ProtectedComponent';

function App() {

   return (
      <Router>
         <Routes>
            <Route
               path='/register'
               element={<RegistrationPage/>}
            />
            <Route
               path='/login'
               element={<LoginPage/>}
            >
            </Route>
            <Route
               path='/add'
               element={<ProtectedComponent PassedComponent={AddProductPage} />}
            >
            </Route>
            <Route
               path='/update'
               element={<ProtectedComponent PassedComponent={UpdateProductPage} />}
            >
            </Route>
         </Routes>
      </Router>
   );
}

export default App;

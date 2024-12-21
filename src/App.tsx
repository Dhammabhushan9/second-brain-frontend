 
 
import './App.css'
import { DashBoard } from './Page/DashBoard'
import { Home } from './Page/Home'
import { SignIn } from './Page/SignIn'
import { SignUp } from './Page/SignUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/signin" />;
};

function App() {
  return <BrowserRouter>
  
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/dashboard' element={
      <ProtectedRoute>
      <DashBoard/>
      </ProtectedRoute>} />
  </Routes>
   
  </BrowserRouter>
   
  
}

export default App

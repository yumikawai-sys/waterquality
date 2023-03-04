import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Service from './components/Service'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Signup from './components/Auth/Signup'
import {AuthProvider} from './components/Auth/AuthProvider'
import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import ProtectedRoutesforLogin from './components/Auth/ProtectedRoutesforLogin'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Navigation/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>

            {/* Admin */}
            <Route path="/admin" element={<ProtectedRoutes/>}>
              <Route path="" element={<Admin/>}/>
            </Route>

            {/* Login */}
            <Route path="/login" element={<ProtectedRoutesforLogin/>}>
              <Route path="" element={<Login/>}/>
            </Route>

            {/* Signup */}
            <Route path="/signup" element={<ProtectedRoutesforLogin/>}>
              <Route path="" element={<Signup/>}/>
            </Route>

            {/* Logout */}
            <Route path="/logout" element={<Logout/>}/>
            
          </Routes>
        
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

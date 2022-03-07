import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

// styles
import './App.css';

// pages and components
import Home from './home/Home';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'



function App() {
  const { user, authIsReady } = useAuthContext() 

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Dashboard  path="/dashboard" />}
          <div>
            <Routes>
              <Route 
                path="/" element={user ? <Navigate to="/" /> : <Home />}
              />
              <Route 
                path="/login" element={user ? <Navigate to ="/dashboard" /> : <Login />}
              />
              <Route 
                path="/signup" element={user ? <Navigate to ="/dashboard" /> : <Signup />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

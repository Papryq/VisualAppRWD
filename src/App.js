import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

// styles
import './App.css';

// pages and components
import Home from './home/Home';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './components/Dashboard'



function App() {
  const { user, authIsReady } = useAuthContext() 

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <div>
            <Routes>
              <Route 
                path="dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} 
              />
              <Route 
                path="/" element={user ? <Navigate to="/dashboard" /> : <Home />}
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

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext'

// styles
import './App.css';

// pages and components
import Home from './home/Home';
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import MemoryGame from './pages/memoryGame/MemoryGame';
import TransactionHome from './pages/transactions/TransactionHome'



function App() {
  const { user, authIsReady } = useAuthContext() 

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
            <Routes>
              <Route 
                path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />}
              />
              <Route 
                path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />}
              />
              <Route 
                path="/" element={user ? <Navigate to="/dashboard" /> : <Home />}
              />
              <Route 
                path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />}
              />
              <Route 
                path="memorygame" element={user ? <MemoryGame /> : <Navigate to="/" />}
              />
              <Route 
                path="/transactions" element={user ? <TransactionHome /> : <Navigate to="/" />}
              />
              {/* <Route 
                path="/cookingApp" element={user ? <CookingHome /> : <Navigate to="/" />}
              /> */}
            </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

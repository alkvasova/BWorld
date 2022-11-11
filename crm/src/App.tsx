import React from 'react';
import './App.css';
import { useAuth } from "./contexts/AuthContext";
import { Outlet, Link, Navigate } from 'react-router-dom';


function App() {
  const { isAuth, logout } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="App">
      {isAuth && (
        <header className="Nav">
          <h1>Мир красоты</h1>
          <nav>

            
            <ul className="Nav_inner">
              <li><Link to="/">Записи</Link></li>
              <li><Link to="/employees">Сотрудники</Link></li>
            </ul>
          </nav>

          <button className="But" onClick={logout}>Logout</button>
        </header>
      )}

      <Outlet />
    </div>
  );
}

export default App;

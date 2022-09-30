import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import User from './Pages/User';
import Adduser from './Pages/Adduser';




function App() {
  return (
    <div>
      
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:id" element={<User />} />
            
          </Routes>
      </Router>
    
    </div>
  );
}

export default App;

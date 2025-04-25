// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProfileCardTailwind from './ProfileCardTailwind';
import ProfileCardStyled from './ProfileCardStyled';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tailwind" element={<ProfileCardTailwind />} />
        <Route path="/styled" element={<ProfileCardStyled />} />
      </Routes>
    </Router>
  );
};

export default App;

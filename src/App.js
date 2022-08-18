import React from 'react';
 
import { Counter } from './features/counter/Counter';
import './App.css';
import Main from './pages/Main/index.js';
import NewsPage from './pages/NewsPage/index.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />  
        <Route path="/newspage/:id" element={<NewsPage/>} />  
      </Routes>
    

    </div>
  );
}

export default App;

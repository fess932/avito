import React from 'react';
 
import { Counter } from './features/counter/Counter';
import './App.css';
import Main from './pages/Main/index.js';
import NewsPage from './pages/NewsPage/index.js';

function App() {
  return (
    <div className="App">
      <Main/>
      <NewsPage/>
    </div>
  );
}

export default App;

import React from 'react';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPages';
import './App.css';

function App() {
  return (
      <div className="App">
        <MainPage/>
        <AboutPage/>
        <TodosPage/>

      </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ToDo from './Pages/Todo';
import SamplePahina from './Pages/SamplePage';
import Navbar from './Layouts/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ToDo" element={<ToDo />} />
        <Route path="SamplePahina" element={<SamplePahina />} />
      </Routes>
        
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </>
  );
}

export default App;

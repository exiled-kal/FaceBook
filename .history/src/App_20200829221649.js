import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        {/* Feed */}
        {/* Widget */}
      </div>
    </div>
  );
}

export default App;

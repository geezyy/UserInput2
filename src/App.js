// import neccessary folders
import './App.css'
import React from 'react';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';


function App() {
  return (
    <div className="App">
      <UserInput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
    </div>
  );
}

export default App;

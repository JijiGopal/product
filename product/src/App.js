 import React from 'react'
import { Form } from 'react-bootstrap';
 import './App.css';
// bootstrap css
import './bootstrap.min.css'
import AddProduct from './components/Addpro';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <AddProduct/>
        
      </header>
    </div>
  );
}
 export default App
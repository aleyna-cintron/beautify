import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App" style={styles.app}>
      <Header style={styles.nav} />
      <main style={styles.container}></main>
      <section>
      <Routes>
          <Route exact path='/' element={<Dashboard />} />  
          <Route path='/settings' element={<Settings />} /> 
          <Route path='/search' element={<Search />} />
          <Route path='/productDetails' element={<ProductDetails />} />
        </Routes>
      </section> 
    </div>
  );
}

export default App;

const styles = {
  icons: {
    fontSize: '2rem'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  }, 
  nav: {
    display: 'flex',
    flexDirection: 'column',
    position: "relative",
    xIndex:"1"
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    height: '24rem'
  },
  ads: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    color:'purple',
    height:'auto'
  },
  app: {
    height: '100vh'
  }
}
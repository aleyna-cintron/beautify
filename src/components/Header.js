import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import logo from '../images/logo.png';

const Header = () => {  
    return (
      <header style={styles.header}>
        <Link to="/">
          <img style={styles.logo} src={logo} alt="Logo" />
        </Link>
        <nav style={styles.nav}>
          {/* <Link to="/productDetails" style={styles.padding}>ProductDetails</Link>
          <Link to="/search" style={styles.padding}>search</Link> */}
        </nav>
        <div style={styles.rtNav}>
          <Link to="/settings"><FaCog style={styles.icons} /></Link>
        </div>
      </header>
    )
  }
export default Header

const styles= {
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white',
    color: 'gray',
    position:'absolute',
    zIndex: '1',
    height: '100%',
    backgroundColor: "#F7BECA",
    width: "2.5rem",
    opacity: "0.90"
  },
  nav:  {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  padding: {
    paddingLeft: '12%',
    textDecoration: 'none',
  },
  ltNav: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 60,
    height: 60
  },
  h1:{
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: '800',
    paddingTop: 10
  },
  searchContainer: {
    display: 'inline-flex',
    flex: '1 1 300',
    width:400,
    border: '1 solid gray',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'darkgray',
  },
  searchIcon: {
    padding: 10,
  },
  searchBox: {
    border: 0,
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    background: 'whitesmoke',
    color: 'gray'
  },
  rtNav: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    marginBottom: "10px"
  },
  avatar: {
    paddingRight: 10,
    height: 50,
    borderRadius: '50%'
  },
  icons: {
    fontSize: 26,
    padding: 20,
    cursor: 'pointer',
    color: "#340410"
  }
}
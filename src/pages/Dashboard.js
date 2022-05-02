import * as React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useLocalStorage from '../hooks/useLocalStorage';


function Dashboard () {
    const [firstName, setFirstName] = useLocalStorage('firstName','Aleyna')
        return (
            <div>
                <ReactFullpage
                    debug
                    navigation
                    render={() =>
                    (<ReactFullpage.Wrapper>
                        <div className="section" style={styles.s1}>
                        <div style={styles.homeText}>
                                <Typography variant="h2" component="div" style={styles.h2}>
                                    Welcome, {firstName}
                                </Typography>
                            </div>   
                        </div>
                        <div className="section" style={styles.s2}>
                            <div style={styles.homeText}>
                                <Typography variant="h2" component="div" style={styles.h2}>
                                    Search Through Hundreds of Makeup Products Across Your Favorite Brands!
                                </Typography>
                                <Button variant="contained" style={styles.btn} ><Link to="/search" style={styles.noTextDecor}>Explore</Link></Button>
                            </div>
                        </div>
                        <div className="section s3" style={styles.s3}>
                        </div>
                    </ReactFullpage.Wrapper>)}
                    
                />

            </div>
    
        )    
}
export default Dashboard;

const styles = {
    container: {
        padding:'8rem',
        marginLeft:'3rem',
    },
    s1: {
        background:"url('https://images.pexels.com/photos/3025620/pexels-photo-3025620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover"
    },
    s2:{    
        background:"url('https://images.pexels.com/photos/4620874/pexels-photo-4620874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover"
    },
    s3:{
        background: "url('https://images.pexels.com/photos/5119202/pexels-photo-5119202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover"
    },
    noTextDecor: {
        color: 'white', 
        textDecoration: 'inherit'
    },
    h2: {
        color: 'white',
        opacity:'1.00',
        padding: '3rem'
        
    },
    btn: {
        width: '13rem',
        fontSize: '2rem',
    },
    homeText: {
        maxWidth: '60%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: '1rem',
        paddingTop:'2rem',
        paddingBottom:'2rem',
        backgroundColor: 'rgba(0,0,255,0.5)'
    }
}
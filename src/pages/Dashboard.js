import React, {useEffect, useState} from 'react';
import ReactFullpage from '@fullpage/react-fullpage'
import { getQueriesForElement } from '@testing-library/dom';

function Dashboard () {
        return (
            <div>
                <ReactFullpage
                    debug
                    navigation
                    render={() =>
                    (<ReactFullpage.Wrapper>
                        <div className="section" style={styles.s1}>
                            <h1></h1>
                        </div>
                        <div className="section" style={styles.s2}>
                            <h1></h1>
                        </div>
                        <div className="section s3" style={styles.s3}>
                            <h1></h1>
                        </div>
                    </ReactFullpage.Wrapper>)}
                    
                />

            </div>
    
        )    
}
export default Dashboard

const styles = {
    container: {
        padding:'8rem',
        marginLeft:'3rem',
        
    },
    s1: {
        background:"url('https://images.pexels.com/photos/3025620/pexels-photo-3025620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        height: "25px"
    },
    s2:{    
        background:"url('https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
    },
    s3:{
        background: "url('https://images.pexels.com/photos/5119202/pexels-photo-5119202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",

        
    }
}
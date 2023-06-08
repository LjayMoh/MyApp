import React from 'react';
import '../../App.css';
import WelcomeSection from '../WelcomeSection';
import CardContainer from '../CardContainer';

function Homepage () {
    return(
        <>
            <WelcomeSection/>
            <CardContainer/>
        </>
    );
}

export default Homepage;
import React from 'react';

import styles from './Landing.module.css';

function Landing(props) {
    return(
        <div className={styles.title}>
            <div className={styles.row}>
                <div>
                    <h1>Hack the 6ix Demo Application</h1>
                    <h3>The live example of <i>Building a REST API with Django</i></h3>
                </div>
                <img className={styles.img} src="https://cdn-media-1.freecodecamp.org/images/1*F8R-PEI9iVJ-sY3qFZemCg.png" alt=""/>
            </div>
            <div>
                <p>
                    Building a REST API doesn't have to be hard. Django makes it easy for us. This application was built
                    using Django and the Django Rest Framework. Authentication is handled using Django Rest Knox. And ofcourse,
                    the frontend was built using React. <br/> <br/>
                    Disclaimer: I use this tech stack for almost everything, and not without reason. <br/><br/>
                    Now explore the website! Hopefully after going through the workshop you understand how to build a REST API with Django
                    a little better, or just REST API's in general. Thanks for coming by and listening to the workshop if you were there!
                </p>
            </div>
        </div>
    )
}

export default Landing;
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
                    using Django and the Django Rest Framework. Authentication is handled using Django Rest Knox. And of course,
                    the frontend was built using React. <br/> <br/>
                    Disclaimer: I use this tech stack for almost everything, and not without reason. <br/><br/>
                    Django allows me to prototype API's quickly due to all the amazing services it provides (Django Rest Framework, Django
                    Rest Knox, built in security), as well as integrate complex functionality into my backend code with the power of
                    Python. React on the other hand integrates perfectly with Django. React allows you to build UI's easily, with
                    customization turning a simple frontend into a complex application. React also supports server side rendering (if you're
                    into that sorta thing). <br/> <br/>
                    Now explore the website! Hopefully after going through the workshop you understand how to build a REST API with Django
                    a little better, or just REST API's in general. Thanks for coming by and listening to the workshop if you were there!
                </p>
            </div>
        </div>
    )
}

export default Landing;
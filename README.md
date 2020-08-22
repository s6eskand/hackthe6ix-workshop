# Building a REST API with Django

## Hack the 6ix Workshop by Sam Eskandar (me)

### Live Demo
If you would like to see the final product in action (authentication and all) navigate to https://music-rating.netlify.app. You can either create a new account and start with a blank slate, or play around with the test account which has some already populated data.

Rules for test account: 
  * Don't delete the JoJo song please
  * Don't post anything that will make me sad or is offensive
  * Credentials: 
    * username: _demoaccount_
    * password: _hackthe6ix_
    
Have fun! Don't break the site, I didn't spend too long on the front end.

### Running on your local machine
If you would like to play around with the code on your local machine, make sure you have the proper dependencies set up.


* Django installed (run `pip install django`)
* Python 3.x installed [found here](https://www.python.org/downloads/)
* latest version of node and npm installed [can be found here](https://nodejs.org/en/download/) 

Note: you do not have to install node if you are only interested in the API itself, and don't want to see an example integrated with a frontend.
  
*Setup*:

Clone the repo: `git clone https://github.com/s6eskand/hackthe6ix-workshop`

*Server*:

Change directories into any of the directories that start with _completed_ (you should probably do this for all of them)
run the following commands (fyi, use `py` instead of `python` if on a windows machine):
```
python manage.py makemigrations
python manage.py migrate
```
This will configure your database, and ensure your Models are configured.

Next, choose a project to use (I recommend not using completed_auth since that is more complicated and different than custom and simple) and run the command:
`python manage.py runserver`
If you have set everything up correctly, the server should run and be hosted on port 8000.

*Optional Frontend*:

Follow these instructions if you are interested in seeing what the connected React app would look like. If not you can always just see the live example.

Change directories into /demo-client

run `npm install` to install any dependencies for the React app.
run `npm start` to see the application running on port 3000

### Conclusion
Hope you learned something new in this project! I love Django and use it all the time (especially at hackathons) so I'd love to see some Django projects stem from this workshop!

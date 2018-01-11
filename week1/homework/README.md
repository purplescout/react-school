# Create-react-app
In this course we utilize the "create-react-app" npm module to easier set up a base project with all the parts needed for starting your react journey.

For more about create-react-app visit the link below!  
Link: https://goo.gl/U53Dh1

## How to get started?!
You will find the lessons in the 'src' folder in the project.
You can also create your own folders to start up your homework in the same directory to make it easier to develop.
Name the folder 'homework' + number/name of the homework.

To start the project you can use the following commands.
* npm run build <- To build the project
* npm start <- Development mode  
* npm test <- Runs tests
* npm run eject <- If you want to change the webpack/babel/lint etc.. settings run this, NOT REVERSIBLE! 


## Hello World!
In the src directory you will find a folder named halloworld, navigate to this folder and open the file  
To be able to use JSX we need to import react, do so now.  
We den create a javascript function, arrow function in ES6.  
Make sure the function returns a '< h1 >' tag with a greeting message inside.  
Finaly export the component to be able to import it later.  
Import the component in app.js, and add the component as a html element in the return.  


## Youtube list homework!
In src directory you will find a folder named youtube-list-homework, navigate to this folder and open the file.  
Start with installing the npm module react-youtube, 'npm install react-youtube --save'  
To start you need to import react and react-youtube.  
Create your functional component.(A: Or create a class that extends component from react)  
Find a youtube video and copy the videos id from the url, the last 10 or so characters.  
Add it to the app.js file to display. 
Remove any old components like HelloWorldExample or your own HelloWorld component 
(A: try to change video on button click. ^ Hint use this.state/this.setState  

Link to react-youtube.  
Link: https://www.npmjs.com/package/react-youtube   
Link to this.state/setState.  
Link: https://reactjs.org/docs/state-and-lifecycle.html  
A = More advanced option.  

# Week 1: Introduction to React


## Presentation

### Contents

* basic idea behind React
* JSX
* ES6
* state functional components

### View presentation

- go to presentation folder for this week
- `npm install`
- `npm start`

### Hello World!
In the src directory you will find a folder named halloworld, navigate to this folder and open the file
To be able to use JSX we need to import react, do so now.
We den create a javascript function, arrow function in ES6.
Make sure the function returns a '< h1 >' tag with a greeting message inside.
Finaly export the component to be able to import it later.
Import the component in app.js, and add the component as a html element in the return.

## Homework

### Youtube list homework!

TODO:

To make the coding easier CSS will be done on our behalf, all you need to do is simply add  
a tag in the JSX element like so `className="the CSS class"`, in this exercise use `youtubeCentered`  

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

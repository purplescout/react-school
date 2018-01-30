// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Spectacle,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  CodePane,
  S
} from "spectacle";
import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";
const code = require('../assets/example');

const images = {
  componentTree: require("../assets/componenttree.png"),
  waterfall: require("../assets/waterfall.png"),
  componentdescturturing: require("../assets/componentdescturturing.png"),
};

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

import "prismjs/components/prism-jsx";

class ChuckNorris extends React.Component {
  randomJoke = () => {
    fetch("http://api.icndb.com/jokes/random")
      .then((resp) => resp.json())
      .then((resp) => {
        const { value: { joke } } = resp;
        this.setState({ joke });
      });
  };
  render() {
    const { joke } = this.state || {};
    return [
      <button onClick={this.randomJoke}>chuckle moreis</button>,
      <p>{joke}</p>
    ];
  }
}

const theme = createTheme(
  {
    primary: "white",
    secondary: "#333333",
    tertiary: "#513675",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
            React School
          </Heading>
          <Text margin="10px 0 0" textColor="quarternary" size={4} bold>
            Purple Scout
          </Text>
          <Text margin="40px 0 0" textColor="primary" size={3} bold caps>
            Week 3
          </Text>
          <Text margin="40px 0 0" textColor="quarternary" size={3} >
            repeate ノ(ò_óノ)
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
            Repetition
          </Heading>
          <Text margin="40px 0 0" textColor="quarternary" size={3} >
            ¯\_(ツ)_/¯
          </Text>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
            What is React?
          </Heading>
          <List>
            <ListItem>Library for building UIs</ListItem>
            <ListItem>Component based</ListItem>
            <ListItem>Cross-platform</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
            Why React?
          </Heading>
          <List>
            <ListItem>Easy to learn and use</ListItem>
            <ListItem>Big eco-system</ListItem>
            <ListItem>Do more with less!</ListItem>
            <ListItem>It's just javascript!</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
            JSX
          </Heading> 
          <br/>
         <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`return React.createElement('div', null, 'Hello there');
// <div> Hello there </div>`}
          />
          <Text margin="40px 0 0" textColor="tertiary">
            HTML in your JS.
          </Text>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={code}
            ranges={[
            { loc: [2,3], note: 'Use javascript in html tag'},
            { loc: [4,5], note: 'Use javascript as value in html tag'},
            { loc: [8,9], note: 'Create logic within html tag'},
          ]}/>
 {/*       <Slide>
           <Heading size={6} textColor="tertiary" caps>
             Javascript in the JSX?
           </Heading> 
           <br/>
          <CodePane
             style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
             lang="javascript"
             source={`1. const Example = () => {
 2.  return {
 3.    <div style={myStyle.div}>
 4.      <h1>
 5.        {someString}
 6.      </h1>
 7.      <ul>
 8.        {
 9.          array.map((item) => return <li>{item}</li>);
 10.        }
 11.      </ul>
 12.    </div>
 13.  }
 14. }`}
           />
           <Text textColor="tertiary">
             No statements! Ohh God no!!
           </Text>
         </Slide>
*/}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Component structure
          </Heading>
          <Image src={images.componentTree.replace("/", "")} />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Component usage
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`import Menubar from './menubar';
import Landingpage from './landingpage';
import Footer from './footer';

const App = () => {
  return {
    <div>
      <Menubar />
      <Landingpage />
      <Footer />
    </div>
  }
}`}/>
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
            Component destructuring
          </Heading>
          <br/>
          <Image src={images.componentdescturturing.replace("/", "")} />
        </Slide>
        <Slide>
          <Heading size={6} textColor="tertiary" caps>
            Props flow, waterfall
          </Heading>
          <Image src={images.waterfall.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Component properties = props
          </Heading>
          <br/>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`1. const Child = (props) => {
2.  return <h1>Hello {props.name}</h1>;
3. }
4. const Parent = () => {
5.   return <Child name="class" />
6. }`}/>
        <br/>
        <Text>Result: <code>Hello class</code></Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            State!
          </Heading>
          <List>
            <ListItem>The apps current condition</ListItem>
            <ListItem>Controls how the app work</ListItem>
            <ListItem>Changed with events</ListItem>
            <ListItem>Most things related to data</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Where do we save it?<br/>
            And change it?
          </Heading>
            <CodePane style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`this.state = {}
this.setState({})`} />
          <List>
            <ListItem>Redux / Flux</ListItem>
            <ListItem>Backend / db</ListItem>
            <ListItem>localstorage</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Single source of truth? Why?
          </Heading>
          <List>
            <ListItem>Minimise risk</ListItem>
            <ListItem>Isolate it</ListItem>
            <ListItem>Immutable</ListItem>
            <ListItem>Less bugs</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Virtual DOM
          </Heading>
          <Text style={{ marginTop: 40 }}>
            React diffs the ouput of two render passes.
          </Text>
          <Text style={{ marginTop: 40 }}>
            It applies the changes to the actual DOM.
          </Text>
          <Text style={{ marginTop: 40 }}>
            It tries to be smart about it (be performant).
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="tertiary" caps>
            Fetch api
          </Heading>
          <CodePane style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`1. fetch(url, {
2.  method: 'POST',
3.  body: JSON.stringify(data),
4. }).then(response => console.log(response))
5.   .catch(error => cosole.error(error));`} />
        </Slide>
        {/*<Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Lifecycle methods
          </Heading>
          <List>
            <ListItem>componentWillMount</ListItem>
            <ListItem>componentDidMount</ListItem>
            <ListItem>shouldComponentUpdate</ListItem>
            <ListItem>componentWillUpdate</ListItem>
            <ListItem>and many more...</ListItem>
          </List>
        </Slide>*/}
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} textColor="primary" caps>
            <code>c[_]&nbsp;</code>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            Thank you
          </Heading>
          <br />
          <Text size={1} textColor="primary" caps transition={["fade"]}>
            <code>(•_•) ( •_•)>⌐■-■ (⌐■_■)</code>
          </Text>
        </Slide>
      </Deck>
    );
  }
}

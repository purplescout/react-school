// Import React
import React from "react";

// Import Spectacle Core tags
import {
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
  CodePane
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "prismjs/components/prism-jsx";

// Require CSS
require("normalize.css");

const images = {
  reactStack: require("../assets/react-stack.png"),
  websitePurpleScoutComponents0: require("../assets/website-purplescout-components-0.png"),
  websitePurpleScoutComponents1: require("../assets/website-purplescout-components-1.png"),
  websitePurpleScoutComponents2: require("../assets/website-purplescout-components-2.png"),
  websitePurpleScoutComponents3: require("../assets/website-purplescout-components-3.png"),
  websitePurpleScoutComponents4: require("../assets/website-purplescout-components-4.png"),
  kublerRossGrievingCurve: require("../assets/kubler-ross-grieving-curve.png")
};

preloader(images);
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
            Week 1
          </Text>
          <Text margin="40px 0 0" textColor="quarternary" size={3} caps>
          ಠ_ರೃ
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            What is React?
          </Heading>
          <List>
            <ListItem>Library for building UIs</ListItem>
            <ListItem>Component based</ListItem>
            <ListItem>Declarative <small>(next week)</small></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            UI Library
          </Heading>
          <List>
            <ListItem>Built &amp; backed by Facebook</ListItem>
            <ListItem>Used in production (web &amp; app)</ListItem>
            <ListItem>Big eco-system</ListItem>
            <ListItem>Cross-platform</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Components are your main tool of abstraction</Quote>
            <Cite textColor="quarternary">Winston Churchill</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents0.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents1.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents2.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components - presentation
          </Heading>
          <Image src={images.websitePurpleScoutComponents3.replace("/", "")} />
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Components - logic
          </Heading>
          <Image src={images.websitePurpleScoutComponents4.replace("/", "")} />
        </Slide> */}
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`<Website>
  <NavBar>
    <Logo size="small" title="johan" />
    <Menu>
      <MenuItem>Varför lila</MenuItem>
      ...
    </Menu>
  </NavBar>
  ...
  <Events count="2" />
  <img src="flygande-johan.png" />
</Website>`}
          />
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            React Components. And an HTML element.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Text textColor="primary">
          Your app is a like a tree.
          </Text>
          <Text textColor="primary" style={{ marginTop: 50 }}>
          Branches are Components.
          </Text>
          <Text textColor="primary" style={{ marginTop: 30 }}>
          Leaves are HTML elements.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100, marginTop: 40 }}
            lang="jsx"
            source={`<Logo size="small" />
<Events count="2" />
<Teaser image="flygande-johan" />`}
          />
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            Attributes configure Components.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            A Component is a function that takes attributes (<code>props</code>) and returns HTML ...<br />
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`// <Logo size="small" />

function Logo (props) {
  return React.createElement(
    'img', {
      src: 'purple-logo.png',
      className: props.size, // 'small'
    },
  );
}`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            ... or Component(s), which allows for composition.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source={`// <NavBar><Logo size="small" /><Menu /></NavBar>

function Logo (props) { ... }
function Menu (props) { ... }

function NavBar (props) {
  return [
    React.createElement(Logo),
    React.createElement(Menu),
  ];
}`}
          />
          <Text style={{ marginTop: 20, fontSize: 25 }}>
            <i>Next week we'll introduce <code>class</code> Components.</i>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            JSX
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 60, paddingRight: 60 }}
            lang="jsx"
            source={`// <Logo size="small" />

function Logo(props) {
  return <img src=\"purple-logo.png\" className={props.size} />;
}
`}
          />
          <Text style={{ marginTop: 20 }}>
            This is <a href="https://reactjs.org/docs/jsx-in-depth.html">JSX</a>. More readable, less boilerplate.<br />Eventually, you
            will love it.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            K&uuml;bler-Ross Grieving Curve
          </Heading>
          <Image src={images.kublerRossGrievingCurve.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            ES6
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 0, paddingRight: 0 }}
            lang="jsx"
            source={`// <Logo size="small" />

const Logo = ({ size }) => <img src=\"purple-logo.png\" className={size} />;
`}
          />
          <Text style={{ marginTop: 20 }}>
            Often written in latest ES6 or newer.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            JSX
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 0, paddingRight: 0 }}
            lang="jsx"
            source={`const Logo = ({ size }) => (
  <img src=\"purple-logo.png\" className={size} />
);

const Logo = ({ size }) => (
  <img
    src=\"purple-logo.png\"
    className={size} />
);

const Logo = ({ size }) => (
  <img
                  src=\"purple-logo.png\"
    className={size}
             />
);
`}
          />
          <Text style={{ marginTop: 20 }}>
            Use <code>()</code> for multiline. Indentation is ignored.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            JSX
          </Heading>
          <Text style={{ marginTop: 20 }}>
            JSX is syntactic sugar for React.createElement
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 50, paddingRight: 50 }}
            lang="jsx"
            source={`// jsx
{
  [1, 2].map(
    count => <h1>{Math.pow(count, 2)}</h1>
  );
}

// js
[1, 2].map(
  count => React.createElement('h1', null, Math.pow(count, 2))
);
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            JSX
          </Heading>
          <Text style={{ marginTop: 20 }}>
            JSX accepts expressions between <code>{"{}"}</code> ...
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`// broken
<h1>
  {
    if (Math.random() > 0.5) {
      return 'you win!';
    } else {
      return 'you lose';
    }
  }
</h1>

// works
<h1>
  { Math.random() > 0.5 ? 'you win!' : 'you lose' }
</h1>
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            JSX
          </Heading>
          <Text style={{ marginTop: 20 }}>
            ... but it doesn't accept statements:<br />
            <small><code>if</code>, <code>for</code>, <code>while</code>, <code>switch</code>, <code>import</code>, etc.</small>
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100, marginTop: 20 }}
            lang="js"
            source={`// broken
React.createElement('h1', if (Math.random() > 0.5) {
  return 'you win!';
} else {
  return 'you lose';
});

// works
React.createElement('h1', Math.random() > 0.5
  ? 'you win!'
  : 'you lose'
);
`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Composition
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`// <Events count="2" />

const Event = ({ event }) => (
  <div>
    <h1>{event.title}</h1>
    <h2>{event.subTitle}</h2>
    <p>{event.description}</p>
  </div>
);

const Events = ({ count }) =>
  getEvents(count).map(
    event => <Event event={event} />
  );`}
          />
          <Text style={{ marginTop: 20 }}>
            Components can be composed, hiding implementation details.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            A very small react app
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="html"
            source={`<html>
  <head>
    <script src="react.js"></script>
    <script src="react-dom.js"></script>
    <script>
      ReactDOM.render(
        React.createElement('img', {
          src: 'purple-logo.png',
          className: "small",
        }),
        document.getElementById("root"),
      );
    </script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            A very small react app
          </Heading>
          <Text style={{ marginTop: 20 }}>
            <code>index.js</code>
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`import React from "react";
import ReactDOM from "react-dom";

const Logo = ({ size }) =>
  <img src=\"purple-logo.png\" className={size} />;

ReactDOM.render(
  <Logo size="small">,
  document.getElementById("root"),
);
            `}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why do people like React?
          </Heading>
          <List>
            <ListItem>small API surface: easy to learn</ListItem>
            <ListItem>embraces Javascript</ListItem>
            <ListItem>best in class DX</ListItem>
            <ListItem>rich ecosystem</ListItem>
            <ListItem>your code is scalable and maintainable</ListItem>
            <ListItem>you get shit done</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Next week
          </Heading>
          <List>
            <ListItem>State</ListItem>
            <ListItem><code>class</code></ListItem>
            <ListItem>Event handling</ListItem>
            <ListItem>Virtual DOM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} textColor="primary" caps>
            <code>c[_]&nbsp;</code>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How to get started?!
          </Heading>
          <List>
            <ListItem>navigate to app</ListItem>
            <ListItem><code>npm install</code></ListItem>
            <ListItem><code>npm start</code></ListItem>
            <ListItem>code: <code>app/src/week1</code></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Hello World
          </Heading>
          <List>
            <ListItem>GitHub: <code>react-school/week1/</code></ListItem>
            <ListItem><code>app/src/week1/helloworld</code></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Homework!! Yeay....not
          </Heading>
          <List>
            <ListItem>GitHub: <code>react-school/week1/</code></ListItem>
            <ListItem><code>app/src/week1/youtube-list</code></ListItem>
            <br/>
            <Text>Example in<br/><code>react-school/week1/examples</code></Text>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            Thank you
          </Heading><br/>
          <Text size={1} textColor="primary" caps transition={["fade"]}>
            <code>(•_•) ( •_•)>⌐■-■ (⌐■_■)</code>
          </Text>
        </Slide>
      </Deck>
    );
  }
}

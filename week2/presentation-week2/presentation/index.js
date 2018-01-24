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
  CodePane,
  S
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

const images = {
  reactStack: require("../assets/react-stack.png")
};

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

import "prismjs/components/prism-jsx";

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

class ClickableButton extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }
  onClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <button onClick={this.onClick}>
        {this.state.clicked ? "Clicked" : "Not clicked"}
      </button>
    );
  }
}

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
            Week 2
          </Text>
          <Text margin="40px 0 0" textColor="quarternary" size={3} caps>
            ٩(^ᴗ^)۶
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            What is React?
          </Heading>
          <List>
            <ListItem>
              <code>class</code>
            </ListItem>
            <ListItem>State</ListItem>
            <ListItem>Virtual DOM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Two types of components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`const Event = ({ event }) => (
  <div>
    <h1>{event.title}</h1>
    <p>{event.description}</p>
  </div>
);

<Event event={eventData} />`}
          />
          <Text style={{ marginTop: 20 }}>
            Stateless functional component<br />(last week)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Two types of components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`class Event extends React.Component {
  render() {
    const { event } = this.props;
    return (
      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </div>
    );
  }
}

<Event event={eventData} />`}
          />
          <Text style={{ marginTop: 20 }}>
            Stateful <code>class</code>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            <code>class</code>
          </Heading>
          <List>
            <ListItem>"lives" until it is GC-ed</ListItem>
            <ListItem>
              you can <code>setState</code> while it lives
            </ListItem>
            <ListItem>
              offers <code>lifecycle</code> hooks/methods
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            <code>constructor(props)</code>
          </Heading>
          <Text style={{ marginTop: 20 }}>
            runs once: immediately after instantiation
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`class Status extends React.Component {
  constructor(props) {
    super(props); // it's still JS ...
    this.props = {
      label: props.label || 'Message',
    };
    this.state = {
      message: props.message,
    };
  }
  render() { ... }
}

<Status label="Le Message" message="start" />`}
          />
          <Text style={{ marginTop: 20 }}>
            Initialize the state (also documents state shape).
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            <code>componentDidMount()</code>
          </Heading>
          <Text style={{ marginTop: 20 }}>
            runs once: when <i>added</i> to the DOM tree.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`class Status extends React.Component {
  constructor(props) { ... }
  componentDidMount() {
    window.thirdPartyStatusDispatcher.subscribe(
      'message',
      (msg) => this.setState({ message: msg }),
    );
  }
  render() { ... }
}

<Status label="Le Message" message="start" />`}
          />
          <Text style={{ marginTop: 20 }}>
            Trigger side-effects and update state with{" "}
            <code>this.setState()</code>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            <code>componentWillUnmount()</code>
          </Heading>
          <Text style={{ marginTop: 20 }}>
            runs once: when <i>removed</i> from DOM tree.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`class Status extends React.Component {
  constructor(props) { ... }
  componentDidMount() { ... }
  componentWillUnmount() {
    window.thirdPartyStatusDispatcher.unsubscribe(
      'message',
    );
  }
  render() { ... }
}

<Status label="Le Message" message="start" />`}
          />
          <Text style={{ marginTop: 20 }}>
            Clean up subscriptions so that it can be properly GC-ed.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary">
            <code>render()</code>
          </Heading>
          <Text style={{ marginTop: 20 }}>
            runs when <code>this.props</code> or <code>this.state</code>{" "}
            changes.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`class Status extends React.Component {
  constructor(props) { ... }
  componentDidMount() { ... }
  componentWillUnmount() { ... }
  render() {
    const { label } = this.props;
    const { message } = this.state;
    return <span>{label}: {message}</span>;
  }
}

<Status label="Le Message" message="start" />`}
          />
          <Text style={{ marginTop: 20 }}>
            <code>render()</code> cannot have side-effects.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Example
          </Heading>
          <CodePane
            style={{
              fontSize: 20,
              paddingLeft: 100,
              paddingRight: 100,
              paddingBottom: 20
            }}
            lang="jsx"
            source={`class ClickableButton extends React.Component {
  constructor() {
    super();
    this.state = { clicked: false };
  }
  onClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <button onClick={this.onClick}>
        {this.state.clicked ? "Clicked" : "Not clicked"}
      </button>
    );
  }
}`}
          />
          <ClickableButton />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            <i>class</i>
          </Heading>
          <Text style={{ marginTop: 30 }}>
            There are more lifecycle hooks, but we don't cover them now.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>
              Tell the taxi driver where to go – not how to get there.
            </Quote>
            <Cite textColor="quarternary">John 14:2-3</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="tertiary"
            caps
            style={{ marginBottom: 80 }}
          >
            React is "declarative"
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            Declarative
          </Heading>
          <Text>telling the computer what result you want</Text>
          <Heading
            size={6}
            textColor="secondary"
            caps
            style={{ marginTop: 40 }}
          >
            Imperative
          </Heading>
          <Text>telling the computer how to calculate it</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Updating a UI
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="html"
            source={`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`}
          />
          <Text style={{ marginTop: 20 }}>How to add another item?</Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="html"
            source={"<li>Item 3</li>"}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="javascript"
            source="$('ul').append('<li>Item 3</li>');"
          />
          <List style={{ paddingLeft: 100 }}>
            <ListItem>find the list</ListItem>
            <ListItem>create a list item</ListItem>
            <ListItem>append it to the list</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Declarative (React)
          </Heading>
          <CodePane
            style={{
              marginTop: 40,
              fontSize: 20,
              paddingLeft: 100,
              paddingRight: 100
            }}
            lang="jsx"
            source={`<ul>
  {items.map(
    item => <li>item.name</li>
  )}
</ul>`}
          />
          <List style={{ paddingLeft: 100 }}>
            <ListItem>define how items are rendered</ListItem>
            <ListItem>
              rerender when <code>items</code> changes
            </ListItem>
            <ListItem>update DOM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="tertiary"
            caps
            style={{ marginBottom: 40 }}
          >
            Jobs to do
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>find the list</ListItem>
            <ListItem>create a list item</ListItem>
            <ListItem>append it to the list</ListItem>
          </List>
          <Heading size={6} textColor="secondary" caps>
            Declarative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>define how items are rendered</ListItem>
            <ListItem>
              rerender when <code>items</code> changes
            </ListItem>
            <ListItem>update DOM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={4}
            textColor="tertiary"
            caps
            style={{ marginBottom: 40 }}
          >
            Your jobs
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>find the list</ListItem>
            <ListItem>create a list item</ListItem>
            <ListItem>append it to the list</ListItem>
          </List>
          <Heading size={6} textColor="secondary" caps>
            Declarative
          </Heading>
          <List style={{ paddingLeft: 100 }}>
            <ListItem>define how items are rendered</ListItem>
            <ListItem>
              <S type="strikethrough">
                rerender when <code>items</code> changes
              </S>
            </ListItem>
            <ListItem>
              <S type="strikethrough">update DOM</S>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Imperative
          </Heading>
          <Text>
            State has to be manually maintained and synced between app and DOM.
          </Text>
          <Heading
            size={6}
            textColor="secondary"
            caps
            style={{ marginTop: 40 }}
          >
            Declarative
          </Heading>
          <Text>
            View is a function of state. React takes care of the rest.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Virtual DOM
          </Heading>
          <Text>React diffs the ouput of two render passes.</Text>
          <Text>It applies the changes to the actual DOM.</Text>
          <Text>It tries to be smart about it (be performant).</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Cross-platform
          </Heading>
          <Image
            style={{ marginTop: 50 }}
            src={images.reactStack.replace("/", "")}
          />
          <Text style={{ fontSize: 14, marginTop: 20 }}>
            <a href="https://react.jsnews.io/scripting-native-app-with-react-native-frontend-reactjs-javascript/">
              source
            </a>
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>That's all Folks</Quote>
            <Cite textColor="quarternary">Porky Pig</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What we didn't teach you (yet)
          </Heading>
          <List>
            <ListItem>all lifecycle hooks</ListItem>
            <ListItem><code>React.PureComponent</code></ListItem>
            <ListItem>Error boundaries</ListItem>
            <ListItem>Fragments</ListItem>
            <ListItem>event system</ListItem>
            <ListItem>
              <code>ref</code>s
            </ListItem>
            <ListItem>DX</ListItem>
            <ListItem>rest of the ecosystem</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Next week
          </Heading>
          <Text>
            Higher-order Components, a.k.a. how to architect your app (next week)
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={1} textColor="primary" caps>
            <code>c[_]&nbsp;</code>
          </Heading>
        </Slide>
        {/* <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
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
            <ListItem>
              <code>class</code>
            </ListItem>
            <ListItem>Event handling</ListItem>
            <ListItem>Virtual DOM</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How to get started?!
          </Heading>
          <List>
            <ListItem>
              <code>npm install</code>
            </ListItem>
            <ListItem>navigate to app</ListItem>
            <ListItem>
              <code>npm start</code>
            </ListItem>
            <ListItem>
              code: <code>app/src/week1</code>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Hello World
          </Heading>
          <List>
            <ListItem>
              GitHub: <code>react-school/week1/</code>
            </ListItem>
            <ListItem>
              <code>app/src/week1/helloworld</code>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Homework!! Yeay....not
          </Heading>
          <List>
            <ListItem>
              GitHub: <code>react-school/week1/</code>
            </ListItem>
            <ListItem>
              <code>app/src/week1/youtube-list</code>
            </ListItem>
            <br />
            <Text>
              Example in<br />
              <code>react-school/week1/examples</code>
            </Text>
          </List>
        </Slide> */}
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

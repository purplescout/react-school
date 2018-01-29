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
    this.state = { dealWithIt: false };
  }
  onClick = () => {
    this.setState({ dealWithIt: !this.state.dealWithIt });
  };
  render() {
    return (
      <button onClick={this.onClick}>
        {this.state.dealWithIt ? "(⌐■_■)" : " ( •_•)"}
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
          ᕕ( ᐛ )ᕗ
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            What is React?
          </Heading>
          <List>
            <ListItem>State</ListItem>
            <ListItem>Virtual DOM</ListItem>
            <ListItem>
              <code>class</code>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          What is state?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          What is state?
          </Heading>
          <Text style={{ marginTop: 20 }}>
            Can be described as the condition the application is in.
          </Text>
          <Text style={{ marginTop: 20 }}>
            The condition changes over time because events occur.
          </Text>
          <Text style={{ marginTop: 20 }}>
            Events can be anything, e.g. user interactions, messages from backend, etc.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          What is state?
          </Heading>
          <Text style={{ marginTop: 20 }}>
            Ask <a href="https://en.wikipedia.org/wiki/State_(computer_science)" target="_blank">Wikipedia</a>:
          </Text>
          <Text style={{ marginTop: 20 }}>
            A program is stateful if it remembers preceding events or user interactions<br />
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          How do we keep track of state?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          How do we keep track of state?
          </Heading>
          <List>
            <ListItem>Database / store</ListItem>
            <ListItem>URL</ListItem>
            <ListItem>Session</ListItem>
            <ListItem><code>window.myState</code></ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          Why is state hard?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          Why is state hard?
          </Heading>
          <List>
            <ListItem>Might be implicit</ListItem>
            <ListItem>Might be hidden</ListItem>
            <ListItem>Multiple actors</ListItem>
            <ListItem>Multiple sources of truth</ListItem>
            <ListItem>It changes over time</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          How can we manage state?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
          How can we manage state?
          </Heading>
          <List>
            <ListItem>Isolate it</ListItem>
            <ListItem>Single source of truth</ListItem>
            <ListItem>Make it accessible (e.g. Dev Tools)</ListItem>
            <ListItem>Make it explicit (e.g. Redux)</ListItem>
            <ListItem>Make it immutable</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Bonus
          </Heading>
          <Text style={{ marginTop: 20 }}>
            What is the difference between state and <code>props</code> in React?
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
            <ListItem>define how <code>items</code> are rendered</ListItem>
            <ListItem>
              re-render when <code>items</code> changes
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
            <ListItem>define how <code>items</code> are rendered</ListItem>
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
            <ListItem>define how <code>items</code> are rendered</ListItem>
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
          <Heading size={5} textColor="tertiary" caps>
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
          <Heading size={5} textColor="tertiary" caps>
            Virtual > Real
          </Heading>
          <Text style={{ marginTop: 40 }}>
            State has to be manually maintained and synced between app and DOM.
          </Text>
          <Text style={{ marginTop: 40 }}>
            <i>Everything</i> has access to the DOM.
          </Text>
          <Text style={{ marginTop: 40 }}>
            <i>Anything</i> can change it, at any point in time, without you knowing that it happened and for what reason.
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
              paddingLeft: 80,
              paddingRight: 80,
              paddingBottom: 20
            }}
            lang="jsx"
            source={`class ClickableButton extends React.Component {
  constructor() {
    super();
    this.state = { dealWithIt: false };
  }
  onClick = () => {
    this.setState({ dealWithIt: !this.state.dealWithIt });
  };
  render() {
    return (
      <button onClick={this.onClick}>
        {this.state.dealWithIt ? "(⌐■_■)" : " ( •_•)"}
      </button>
    );
  }
}`}
          />
          <ClickableButton />
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
              <code>ref</code>
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How to get started?!
          </Heading>
          <List>
            <ListItem>navigate to app</ListItem>
            <ListItem><code>npm install</code></ListItem>
            <ListItem><code>npm start</code></ListItem>
            <ListItem>code: <code>app/src/week3</code></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <Heading size={6} textColor="primary" caps>
            Youtube video controller
          </Heading>
          <List>
            <ListItem>GitHub: <code>react-school/week3/</code></ListItem>
            <ListItem><code>app/src/week3/youtube</code></ListItem>
            <br/>
            <Text textColor="primary">Example in<br/><code>react-school/week3/examples</code></Text>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Homework!! again?.... ¯\_(ツ)_/¯
          </Heading>
          <List>
            <ListItem>GitHub: <code>react-school/week3/</code></ListItem>
            <ListItem><code>app/src/week3/countdown</code></ListItem>
            <br/>
            <Text>Example in<br/><code>react-school/week3/examples</code></Text>
          </List>
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

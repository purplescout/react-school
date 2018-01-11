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
  websitePurpleScoutComponents0: require("../assets/website-purplescout-components-0.png"),
  websitePurpleScoutComponents1: require("../assets/website-purplescout-components-1.png"),
  websitePurpleScoutComponents2: require("../assets/website-purplescout-components-2.png"),
  websitePurpleScoutComponents3: require("../assets/website-purplescout-components-3.png"),
  websitePurpleScoutComponents4: require("../assets/website-purplescout-components-4.png")
};

preloader(images);

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

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
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            What is React?
          </Heading>
          <List>
            <ListItem>Library for building UIs</ListItem>
            <ListItem>Component based</ListItem>
            <ListItem>Declarative</ListItem>
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
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Components are your main tool of abstraction</Quote>
            <Cite textColor="quarternary">France is Bacon</Cite>
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
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Components - logic
          </Heading>
          <Image src={images.websitePurpleScoutComponents4.replace("/", "")} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`<App>
  <NavBar>
    <Logo />
    <Menu>
      <MenuItem>Varför lila</MenuItem>
      <MenuItem>...</MenuItem>
    </Menu>
  </NavBar>
  ...
  <Events count="2" />
  <Teaser image="flygande-johan" />
</App>`}
          />
          <Text style={{ marginTop: 20 }}>Your app is a component tree.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            Components are Javascript objects.
          </Text>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`// <Logo size="small" />

function Logo (props) {
  return <img src="purple-logo.png" class={props.size} />;
}`}
          />
          <Text style={{ marginTop: 20 }}>
            // TODO: JSX!! The most simple form is a function that takes data
            and returns HTML.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`// <Logo size="small" />

const Logo = ({ size }) =>
  <img src="purple-logo.png" class={props.size} />;
`}
          />
          <Text style={{ marginTop: 20 }}>
            Often written in latest ES6 or newer.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>
            Components
          </Heading>
          <CodePane
            style={{ fontSize: 20, paddingLeft: 100, paddingRight: 100 }}
            lang="jsx"
            source={`// <Events count="2" />

const Events = ({ count }) =>
  getEvents(2).map(
    event => <Event event={event} />
  );

const Event = ({ event }) => (
  <div>
    <h1>{event.title}</h1>
    <h2>{event.subTitle}</h2>
    <p>{event.description}</p>
  </div>
);`}
          />
          <Text style={{ marginTop: 20 }}>
            Components can be composed, hiding implementation details.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>
              You tell the taxi driver where to go – not how to get there.
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
            Update UI
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
            View is a (pure) function of state. React takes care of the rest.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why do people like React?
          </Heading>
          <List>
            <ListItem>small API surface: easy to learn</ListItem>
            <ListItem>embraces Javascript</ListItem>
            <ListItem>rich ecosystem</ListItem>
            <ListItem>your code is scalable and maintainable</ListItem>
            <ListItem>you get shit done</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Declarative eats imperative for breakfast</Quote>
            <Cite textColor="quarternary">Winston Churchill</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}

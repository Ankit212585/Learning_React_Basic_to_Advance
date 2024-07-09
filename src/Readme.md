<!-- What is functional Components -->

Ans- Functional components are some of the more common components that
will come across while working in React. These are simply JavaScript
functions. We can create a functional component to React by writing a
JavaScript function.

<!-- ----------------------------------------------------------------------------------------- -->

<!-- Here is some example of functional components -->

import React, { useState } from "react";

const FunctionalComponent = () => { const [count, setCount] =
useState(0);

    const increase = () => {
    	setCount(count + 1);
    }

    return (
    	<div style={{ margin: '50px' }}>
    		<h1>Welcome to Geeks for Geeks </h1>
    		<h3>Counter App using Functional Component : </h3>
    		<h2>{count}</h2>
    		<button onClick={increase}>Add</button>
    	</div>
    )

} export default FunctionalComponent;

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is jsx (javaScript XML) syntax -->

Ans:-JSX (JavaScript XML, formally JavaScript Syntax eXtension) is an
XML-like syntax extension to the JavaScript language syntax. JSX is
used primarily with React, a JavaScript library for building user
interfaces. JSX allows developers to write HTML-like code inside a
JavaScript file.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is props -->

Ans:-Props (short for "properties") are a way of passing data from
another components,In React, "props" (short for properties) are a
mechanism for passing data from a parent component to a child
component. Props are read-only and are used to configure the child
component with data or behavior defined by the parent component. This
allows components to be reusable and modular.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- Here is some example to passing props -->

// Greeting.js import React from 'react';

<!-- see how to passing props  -->

function Greeting(props) { return <h1>Hello, {props.name}!</h1>}

export default Greeting;

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is Default props -->

Ans:-Default props in React are predefined values for props in React
components. Default props are a way of providing default values for
props that are not required by the component. Default props can be
used to define any props that you want to be set for a component,
whether or not a value is passed in from the parent component

<!-- Here is some example Default props -->

const Component = ({ prop1, prop2 }) => (

  <div></div>
)

Component.defaultProps = { prop1: false, prop2: 'My Prop', }

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is props types -->

Ans:- In React, PropTypes is a library that allows developers to
create rules for the data passed into props. It can be used to
validate data types, set default values, and ensure that a value is
passed. PropTypes is only checked in development mode for performance
reasons, and when an invalid value is provided, a warning will appear
in the JavaScript console.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is immutable state -->

Ans:- In React, an immutable state means that the state object is not
modified directly but rather replaced with a new object whenever the
state needs to be updated. This immutability principle helps maintain
predictable state changes, enables better debugging, and allows React
to optimize rendering efficiently. 1.Immutable state makes state
changes predictable, reducing bugs caused by unexpected mutations.
2.Immutable state helps track changes over time, making it easier to
implement features like time-travel debugging.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- what is hook and we know that some hooks -->

Ans:-A hook in React is a function that allows you to add state and
other React features to function components. Hooks are a new addition
to React, and they are not required to use React. However, they can
make your code more concise and easier to read. There are several
different types of hooks, but the most common one is the useState
hook. The useState hook allows you to add local state to a function
component. This means that you can store data in the component without
having to pass it down from a parent component.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- Here is some example -->
<!-- useState -->

Ans:-The useState hook is a powerful addition to React, introduced in
version 16.8. It allows you to manage state within functional
components without the need for class-based components. In this
useState Hooks article, we’ll learn about useState, its syntax, usage
and best practices with examples.

import React, { useState } from 'react';

function Counter() { const [count, setCount] = useState(0);

return ( <div> <p>Current count: {count}</p> <button onClick={() =>
setCount(count + 1)}>Increment</button> </div> ) };

<!-- ----------------------------------------------------------------------------------------- -->
<!-- useEffect -->

Ans:-React useEffect hook handles the effects of the dependency array.
The useEffect Hook allows us to perform side effects on the
components. fetching data, directly updating the DOM and timers are
some side effects. It is called every time any state if the dependency
array is modified or updated.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- useMemo -->

Ans:-The useMemo hook takes two arguments: a function and an array of
dependencies. The function is the calculation that you want to cache,
and the dependencies are the values that the calculation depends on.
If any of the dependencies change, the calculation will be re-run and
the cache will be updated. In React also, we use this concept,
whenever in the React component, the state and props do not change the
component and the component does not re-render, it shows the same
output. The useMemo hook is used to improve performance in our React
application.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- useContext -->

Ans:-The useContext hook is a React hook that allows you to share data
between components without having to explicitly pass props through
every level of the tree. It is designed to share data that can be
considered as global data for a tree of React components, such as the
current authenticated user or theme. The useContext hook takes a
context object as an argument and returns the current context value
for that context. The current context value is determined by the value
prop of the nearest <MyContext.Provider> above the calling component
in the tree.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- useRef -->

Ans:-The useRef is a hook that allows to directly create a reference
to the DOM element in the functional component.The useRef hook is a
new addition in React 16.8. To learn useRef the user should be aware
about refs in React. Unlike useState if we change a value in useRef it
will not re-render the webpage it allows to developer to enables
developers to efficiently access and modify DOM elements, preserve
values, and manage state without triggering unnecessary re-renders.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is Event handling and form -->.

Ans:-Event handling in ReactJS is a mechanism that allows developers
to respond to user interactions with their application.Event handling
allows developers to define functions that will be executed when these
events are fired.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- There are two types of Event Handling -->
<!-- Inline Event Handling -->

1.Inline event handling is the simplest way to handle events in
React.The event handler attribute should contain the name of the event
that you want to handle, followed by an equal sign (=) and the name of
the function that you want to execute when the event is fired.

<!-- Declarative Event Handling -->

1.Declarative event handling is a more powerful way to handle events
in React. It involves using the onClick, onChange, and other event
handler props to define functions that will be executed when the
corresponding event is fired.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is conditional rendering -->

Ans:- Conditional rendering in React refers to the process of
delivering elements and components based on certain
conditions.Conditional rendering in React is a technique that allows
you to render different UI elements based on certain conditions. It is
a powerful tool that can be used to create dynamic and engaging user
interfaces.

<!-- Here is some Example -->

function Greeting(props) { if (props.isLoggedIn) { return <h1>Welcome,
{props.name}!</h1>; } else { return <h1>Please log in.</h1>; } }

<!-- ----------------------------------------------------------------------------------------- -->
<!-- Component Composition -->

Ans:-Component composition is a fundamental concept in React that
allows developers to build complex user interfaces by combining
smaller, independent components. It is a way of creating reusable
components by combining existing components together.

<!-- Here is some benifits to components Composition -->

1.Code reusability:-Component composition allows developers to reuse
components across different parts of an application.
2.ReadAbility:-Component composition makes code more readable and
maintainable.

<!-- ----------------------------------------------------------------------------------------- -->
<!-- What is React router Dom -->

Ans:-React Router DOM is a collection of navigational components that
compose declaratively with your application.

<!-- Here is the command to install the React router dom  -->

npm install react-router-dom

<!-- And how to use React router dom -->
<BrowserRouter>
  <Route path="/" component={Home} />
  <Route path="/users/:id" component={User} />
</BrowserRouter>
<!-- ----------------------------------------------------------------------------------------- -->
<!-- what is higher - order functional components -->

Ans:-Higher-order components (HOCs) are a powerful feature of the
React library. They allow you to reuse component logic across multiple
components. In React, a higher-order component is a function that
takes a component as an argument and returns a new component that
wraps the original component.

<!-- Here is some example of HOC -->

const HigherOrderCompnent = (WrappedComponent) => { const NewComponent
= (props) => { // other code }; return NewComponent; };

<!-- ----------------------------------------------------------------------------------------- -->
<!-- State management -->

context API, creating context, useContext Hook

<!-- Redux toolkit -->

Actions, Reducers, store

<!-- Testing -->

jest testing framework ,React testing library

<!-- Optimization -->

Memoization, profiling and performance monitoring , purecomponent and
react memo,code splitting, lazy load

<!-- Build and Deployment -->

create React app- vite, production builds, deployment strategies

<!-- What is Redux -->

State management for cross component or app-wide state. Redux is a
predicatable state management library for javaScript apps. Local state
vs Cross-component state us App-wide state UseState or useReducer vs
UseState with prop drilling vs UseState or UseContext or redux

<!-- React Vs Redux -->

1.Base:- We can use Both. 2.Setup and coding:- Is tough especially if
you have multiple context providers. 3.Performance:- Is slow context
should only be used for things tht rarely chance on the other hand
Redux has great performance. 4. Basic:- If these things don't matter
to you then you can choose not to use redux and stay with
React-Context.

<!-- How Redux Works -->

1. Single source:-Uses a single central store to maintain the entire
   application state.
2. Actions:- Components never directly chance the store changes to
   state are made through dispatched actions which describe events.
3. Reducers:- Actions are processed by reducers, pure functions that
   return the new state.
4. Immutable:- State is immutable; every change results in a new state
   object
5. This different from UseReducer Hook.



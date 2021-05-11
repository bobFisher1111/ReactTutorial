/*
	- React Tutorial:
		- Links:
			- Udemy Link: https://wipro.udemy.com/course/react-with-typescript/learn/lecture/17104768#overview
			- https://wipro.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15081790#overview

		- Notes:
			- React 4 Key Concepts:
				1. Dom: Declarative, "Dont touch dom, react does it"
					- Tell dom state of app, instead of old way that was imperative and everthing had to be related to one another
					- Whatever state or data of app, react will change everthing for you

				2. Component Architecture: 
					- Small components put together to form bigger components
					- Also, components are resuable

				3. One-Way-Data-Flow:
					- Creates Virtual Dom:
						- The react function takes 2 things, state & the component
							function React(state, component){}
						- Virtual dom is a tree like object that gives react a blueprint how should update actual dom
					- One-Way-Data-Flow is like trickle down economics, flows down. Data can never move up

				4. UI Library:
					- React not a framework but an UI Library, only work with user view. Everything else you can choose what you
						want. 

				- Keywords:
					- Declarative 
					- JSX
					- Components
					- State
					- Props
					- VirtualDOM

				- 3 Things need to be good at:
					1. Decide on Components:
						- How to build reusable component & how much want to break them down
					2. Decide the State & where it lives:
					3; What changes when state changes:

			- Extra:
				- turn if else into turnery:
				 	// if statement
					if(this.state.showChild) {
						<ComponentName text={this.state.text} />
					} else {
						null
					}
					// ternary:
					{this.state.showChild ? <ComponentName text={this.state.text} /> : null}

			- Additional Libraries:
				- 

			- Key Developers Concepts:
				- Array Methods:
					- map():
						-  Creates a new array with the results of calling a function for every element array, and in the order they appear
							.map(el => valueOurNewArray)

						- Example:
							const myArray = [1,2,3,4]
							myArray.map(x => x + 1)

					- filter():
						- Creates an array filled with all array elements that pass a test (provided as a function).
						- Returns a true or false value:
							- Whatever is turned true will be kept in our array
						- Example:
							const myArray = [1,2,3,4]
							// filter out anything less than 5
							myArray.filter(x => x > 4)

					- reduce()
						- Reduce the values of an array to a single value (going left-to-right)
						- Reduce is good for 2 things:
							1. End up with one value at end
							2. Outcome of iterating over our elements in each subsequent iteration
								- accumulator is the initialValue, or if its itirated its that that value like first being adding
									0 + 1, then 1 + 2, because first was total 1, that is the accumalotr for next round
						- Example:
							const array = [1,2,3,4,5,6];
							// add all values together starting with first
							array.reduce((accumulator, currentElement) => accumulator + currentElement, 0); // zero is starting by choice index

					- find():
						- Returns the value of the first element in an array that pass a test
						- Example:
							const myArray = [1,2,3,4,5,6,7,8];
							myArray.find(x => x > 4);

					- includes():
						- Check if an array contains the specified element, takes a single element and checks if it exist in array
						- Non Primitive Types:
							- Will not work like primitive types and be assigned to that reference location.
						- Example 1:
							const myArray = [1,2,3,4,5];
							myArray.includes(3);
					

				- Promises:
					- Is instantiated with this constructor and given 2 things, resolve & reject. Promise is, that this object will eventually 
						have a value. It will a resolved value or a rejected value. Resolve value for an example when the api call is successful. 
						Reject value is when api call gives us an error. The promise will be in a state where its pending until either resolve or 
						reject have been called.
					- You can use as many .then on resolve as you need
					- You don't always have to call reject, just leave it out if there is no reason to have it
					- Example:
						const myPromise = new Promise((resolve, reject) => {
							if (true) {
								setTimeout(() => {
								resolve('I have succeeded');
								}, 1000);
							} else {
								reject('I have failed');
							}
							
						});
						// Access the value inside the promise:
						myPromise.then(value => console.log(value)) // this will give resolve using .then()
								 .catch(rejectValue => console.log(rejectValue)); // this will give us reject using .catch

				- Async Await:
					- Use keyworkd "async"
					- awaited does, pause function until whats being waited on is completed & comes back with value, use keyword "awaited"
					- For error handling use try & catch block
					- Syntax:
						const myAsyncFunction = async () => {
							const userResponse = awaited fetch('https:somevalue.com)
							const users = await userResponse.json(); // this will also have to be awaited because userResponse has await
							// ... this down here will wait for what in awaited is complete before this gets executed
						}

				- Memorization
					- Caching:
						- Way to store values to use them later on in dynamic programming
						- Example:
							// Old Way:
							function addTo80(n) {
								console.log('long time');
								return n + 80;
							}
							addTo80(5)

							// Caching Way, more efficient: Use an empty array
							let cache = {}
							function addTo80(n) {
								if (n in chace) {
									// if exist in array
									return cache[n];
								} else {
									// Incase does not exist in array
									console.log('long time');
									cache[n] = 5 + 80;
									return cache[n];
								}
							}

				- Currying:
					- Take a function take multiple parameters & instead use incurring modify it to a function to take 1 parameter at a time
					- Useful for making multiple utilties functions out of it
					- Example:
						// Normal Way:
						- const multiply = (a,b) => a*b;
						  multiply(5,3);
						// Curry Way:
						- const curriedMultiply = (a) => (b) => a * b;
						  curriedMultiply(5)(3);
						// Creating utilties with curried:
						  const curriedMultiplyBy5 = curriedMultiply(5);
						  curriedMultiplyBy5(4) // basically you only have to call the last part b parameter a is taken care of

			- React Basics:
				- Create React App:
					- Command:
						- Plain JavaScript Version:
							- npx create-react-app appName
						- TypeScript Version:
							- npx create-react-app appName --template typescript

				- Class Components:
					- Class gives access to a state:
					- State:
						- is a javaScript object with properties we can access at any point inside our class
					- setState:
						- it lets us modify state object on every single html element
						- Example:
							// when use onClick we can change text from Hello Turtle to Hello Lion
							onClick={()=>this.setState({string: 'Hellow Lion'})}
					- Syntax:
						import React, { Component } from 'react'; // need to import Component for class Component
						// Create Class App
						class App extends Component {
							// This is where we can do state, create constructor() with super()
							constructor() {
								// super calls constructor method on the component class
								// super helps us with this by calling React.Components constructor()
								super(); 
								// Create state object:
								this.state = {
									string: 'Hellow Turtle'
								}
							}
							render() {
								return (
									<div>
									 <h1>{ this.state.string }</h1>
									 <button onClick={()=>this.setState({string: 'Hellow Lion'})}>Change Text</button>
									</div>
								)
							}
						}

				- Thinking in JSX:
					-  Unlike the past, instead of putting JavaScript into HTML, JSX allows us to put HTML into JavaScrip
					- Use "{ }", to pass in a javaScript expression
					- also changes in capitization like html = onclick to jsx = onClick, same thing
					- JSX tries to mimic HTML so we can create Virtual DOM
				
				- Dynamic Content:
						- Map():
							- Map function returns whatever pass to it & iterates over every element in array, also need to include a key for
								each element.
								- Example:
									this.state = {
										monster: [
											name: '...',
											id: '..', // required, and used as the key, incase needs to update an element
										]
									}
									this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name}</h1>)

				- Fetching Content:
						- Life cycle Methods:
								- Methods get calledat different stages when component gets rendered
								- ComponentDidMount:
									- Gets invoked right after React Component has been mounted, after first render() lifecycle
									- Mounting is basically when react puts our component on page, calls whatever code is in this method
									- Example:
										componentDidMount() {
											fetch('https://jsonplaceholder.typicode.com/users')
											// turns response into a json
											.then(response => response.json())
											// then use setState to set monsters: users
											.then(users => console.log(users));
										}

				- Architecting App:
					- Two ways of creating components: 
						1. Class based
						2. Functions based

				- Props:
					- Props are parameters that are passed in Component
						- Children are what you pass between like hello, <h1>hello</h1>

				- React Events:
					- onChange is jsx

				- Class Methods & Arrow Functions:
					- A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).

				- Introducing Lifecycle Methods:
					- React Lifecycle Methods - Mounting:
						- componentDidMount():
							- Method runs after the component output has been rendered to the DOM.

					- React Lifecycle Methods - Updating:
						- componentDidUpdate():
							- Is invoked immediately after updating occurs. This method is not called for the initial render.

					- React Lifecycle Methods - Unmounting
						- componentWillUnmount():
							- Is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, 
								canceling network requests, or cleaning up any subscriptions that were created in

			- Master Project: Setting Up E-Commerce Project:

			- Master PRoject: React Router & Routing:

			- Master Project: Forms + Components:

			- Master Project: Firebase + User Authentication

			- Master Project: Redux 1:
			
			- Master Project: Session Storage + Peristence:

			- Master Project: Redux 2:

			- Master Project: Advanced Routing:

			- Master Project: State Normalization:

			- Master Project: Stripe Payments Part 1:

			- Master Project: Deploying to Production:

			- Master Project: CSS in JS - styled-components:

			- Master Project: Advanced Redux + Firebase:

			- Master Project: HOC Patterns:

			- Master Project: Asynchronous Redux:

			- Master Project: Container Pattern:

			- Master Project: Redux-Saga:

			- Master Project: Hooks:

			- Stripe Payments Part 2 - Backend:

			- Master Project: Context API

			- Master Project: GraphQL + Apollo:

			- Master Project: Mobile Support:

			- Master Project: React Performance:

			- Progressive Web App:

			- Firebase Security:

			- Testing:

			- Webpack + Babel:

			- Build a GatsbyJS Blog

			- Key Developers Concepts:

			- Open Source Projects:

			- AMA + Bonus:


*/
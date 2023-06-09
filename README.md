#### Components --- Functional Component and Class Based Component

### Functional Components 
-- Every time you think of component, think about function
-- starts with a capital letter 
-- returns jxs, which means javascript xml (which is just html)
-- remember to export your component. (Default export or named export)
-- extension needs to be jsx not js -- for vite

### Starting a server using the vs code IDE 
-- npm dev or yarn dev or npm run dev or yarn run dev
-- to stop the server --> ctrl + ` (backtick)

### JSX rules 
-- always need to return a single parent 
-- semantic tags are allowed
-- React fragment is also allowed
-- Every element should have a closing tag

### ClassName 
-- classes are used as className (camelCase) in react 

### Props - Properties
-- Its is an OBJECT
-- props.theattributename
-- easiest way to access it -- is by destructuring

### useState Hook
-- It is a function
-- The useState hook returns an array with two elements : the current state value and a function that we can to update the state
-- accepts default value as an argument 
-- state update triggers re-render 

### Rules of hooks 
-- starts with USE (both -react and custom hooks)
-- component must be UPPERCASE 
-- invoke inside of a functional component body 
-- don't call hooks conditionally

### useEffect Hook 
-- useEffect is a hook in React that allows you to perform side effects in a functional component 
-- Side Effect -- any work outside of a component. Example of side effect the fetching data, subscriptions, DOM, event listeners, timers etc

-- useEffect is a hook from react
-- accepts 2 arguments (Nb -- the second is optional)
-- 1st argument (cb function)
-- second argument -- dependency array 
-- the useEffect hook runs after every re-render
-- cb can't return promise (so can't make it async)

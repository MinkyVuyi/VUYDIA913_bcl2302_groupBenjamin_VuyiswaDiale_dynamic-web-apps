// import React from "react";
// import ReactDOM from "react-dom";

// //React
 //ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById('root'));
// ReactDOM.render(<p>Hello, my name is Vuyiswa Diale</p>, document.getElementById('root'));
// ReactDOM.render(<ul><li>Minky</li><li>Vuyi</li></ul>, document.getElementById('root'));

// //Navigation Bar
// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// Rendering the nav bar using React

// function MainContent () {
//     return (
//         <h1>I'm learning React</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// Using Vanilla js
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
 

*/
// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element);


//JSX
// is just syntactic sugar for calling createElement() with different arguments:

//Objects Nature of React elements
/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}
 */
// Challenge - create your own component that renders this same thing!

// ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"))

// ReactDOM.render(
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>,
//     document.getElementById("root")
// )

// //Making it work using react
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )

//console.log
// ▲You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/
// ›{type: "div", key: null, ref: null, props: {children: [{type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}, {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}
// /index.html

// //Creating a navbar using JSX
// const Navbar = () => {
//     return (
//       <nav>
//         <h1>Learning React</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     );
//   };
  
//   ReactDOM.render(<Navbar />, document.getElementById("root"));
 

//Thought experiment: use .append() instead of ReactDOM.render()?
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
  3.1 It shows [Object Object] is a string representation of a regular JS object.
4. See if you can explain what actually shows up in the browser
   *JSX returns plain js object and has nothing to do with the DOM and the browser does not recognize this
 */

//2.1 Creating a navbar using JSX
// const Navbar = () => {
//     <div>
//       <nav>
//         <h1>Learning React</h1>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </div>
//   };
  
//   document.getElementById("root").append(JSON.stringify(Navbar));

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */
// const page = (
// <div>
// <h1>My awesome website in React</h1>
// <h3>Reasons I love React</h3>
// <ol>
//     <li>It's composable</li>
//     <li>It's declarative</li>
//     <li>It's a hireable skill</li>
//     <li>It's actively maintained by skilled people</li>
// </ol>
// </div>
// )

// ReactDOM.render(page,document.getElementById("root"))
// //document.getElementById("root").append(JSON.stringify(page))

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

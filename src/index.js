//removed boiler plates

/*
1. Import React from 'react'
2. Set up a component function (denoted by the first letter being capitalized)
3. Inject JavaScript by importing ReactDom (usually unnecessary if using 
   create React App)
*/

import React from "react"; //importing react from react dependency
//not react dependent, strictly just JavaScript

//javascript entry point
import ReactDOM from "react-dom/client";
//UPDATED FROM import ReactDom from "react-dom"; (OUT OF DATE UNSUPPORTED)

//import CSS
import "./index.css";
//./means file in the same folder as working file

//REACT TOOLS
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/512V7zylZPL._SY445_SX342_.jpg"
    alt=""
  />
);

const Title = () => <h1>Hot Mess</h1>;

const Author = () => <h4>Jeff Kinney</h4>;

//need to have closing tag (ex: <Greeting/><Greeting>) if there is no self-closing
//tag (ex: <Greeting/>)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
//passing what to render (greeting) and where (root)
//render is only where we inject javascript

/*
OUT OF DATE
ReactDom.render(<BookList />, document.getElementById("root"));
*/

// // doesn't look as good (what happens under the hood)
// const Greeting = () =>{
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   );
// }

//need to capitalize first letter so react knows it is a component
// function Greeting() {
//   //need to return html (officially called JSX) (always)
//   return (
//     <div>
//       <h3>Hello People</h3>
//       <ul>
//         <li>
//           <a
//             href="https://www.youtube.com/watch?v=5EBSqTf-vXI"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Brandon Perna Vid
//           </a>
//         </li>
//         <img src="" alt="" />
//         <input type="text" />
//       </ul>
//     </div>
//   );
// }

/* 
JSX Rules
1. Return a single element
  get creative in the single element
  cannot have multiple <div> elements (must all be wrapped in one div)
  Follow html semantics (div/section/article) for good practice
2. use camelCase for an html attribute
3. className intead of class (class is a keyword) in div
4. close every element
*/

//***************************************************************** */
// //NESTED COMPONENTS
// function BookList() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// //splitting up application into separate chunks, allows reuse
// const Person = () => <h2>john doe</h2>; //implicit return
// const Message = () => {
//   return <p>this is my message</p>; //explicit return
// };
//***************************************************************** */

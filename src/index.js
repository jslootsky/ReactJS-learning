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

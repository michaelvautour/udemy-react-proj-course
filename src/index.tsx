import React from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-dom";
import Message from "./Components/Message";
import Person from "./Components/Person";

// CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Person />
      <Message />
      This is a booklist
      <br />
      <Book />
    </section>
  );
};

const author = "George R. R. Martin";

const Book = () => {
  const title = "A Song of Ice & Fire";

  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/91GcaFy+4GL._AC_UL640_FMwebp_QL65_.jpg"
        alt="Game of Thrones Boxset"
        width="50%"
        height="50%"
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* Cannot add JS directly in JSX that does not return a value, always need to pass
      the value (i.e. cannot be a statement)
      <p>{let x = 6}</p> 
      As shown in below it'll return as it returns a value:
      */}
      <p>{6 + 6}</p>
    </article>
  );
};

// example of css in direct JSX
// First {} after style is jumping in JavaScript
// Second one is an object that's required
// My explanation likely needs some refining
// properties are written normal, but values need to be in ""
// inline css directly in the item will override (similar to non-react)
// example no longer used below:

/* <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
  George R. R. Martin
</h4>; */

// ReactDOM.render(<BookList />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<BookList />);

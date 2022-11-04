import React from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-dom";
import Message from "./Components/Message";
import Person from "./Components/Person";

// CSS
import "./index.css";
// setup vars
// const author = "George R. R. Martin";
// const title = "A Song of Ice & Fire";
// const img =
//   "https://m.media-amazon.com/images/I/91GcaFy+4GL._AC_UL640_FMwebp_QL65_.jpg";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/51rW2153DLL._SL500_.jpg",
  title: "I love You to the Moon and Back",
  author: "Amelia Hepworth",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/91GcaFy+4GL._AC_UL640_FMwebp_QL65_.jpg",
  title: "A Song of Ice & Fire",
  author: "George R. R. Martin",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Person />
      <Message />
      This is a booklist - test
      <br />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = (props: any) => {
  return (
    <article className="book">
      <img src={props.img} alt="" width="50%" height="50%" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<BookList />);

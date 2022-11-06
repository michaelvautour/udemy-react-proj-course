import React from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-dom";
import Message from "./Components/Message";
import Person from "./Components/Person";

// CSS
import "./index.css";
// setup vars
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/51rW2153DLL._SL500_.jpg",
    title: "I love You to the Moon and Back",
    author: "Amelia Hepworth",
    p: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/91GcaFy+4GL._AC_UL640_FMwebp_QL65_.jpg",
    title: "A Song of Ice & Fire",
    author: "George R. R. Martin",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/719CalwMtfL._AC_UL320_.jpg",
    title: "IT",
    author: "Stephen King",
  },
];

type BookProps = {
  [x: string]: {
    id?: number;
    img: string;
    title: string;
    author: string;
    p?: string;
  };
};

const BookList = () => {
  return (
    <section className="booklist">
      <>
        {books.map((book, index) => {
          console.log("book arr", book);

          return <Book bookitem={book}></Book>;
        })}
        <Person />
        <Message />
        This is a booklist
        <br />
      </>
    </section>
  );
};

const Book = (props: BookProps) => {
  console.log("in Book Component", props);
  const { img, title, author, p } = props.bookitem;

  return (
    <article className="book">
      <img src={img} alt="" width="50%" height="50%" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <h6>{p}</h6>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<BookList />);

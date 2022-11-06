import React from "react";
import { createRoot } from "react-dom/client";
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
  id: number;
  img: string;
  title: string;
  author: string;
  p?: string;
};

const BookList = () => {
  return (
    <section className="booklist">
      <>
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
        <Person />
        <Message />
        <br />
      </>
    </section>
  );
};

// const complexExample = (author: string) =>
//   void console.log("from complexExample", author);

const Book = ({ img, title, author, p }: BookProps) => {
  const clickHandler = (e: any) => {
    console.log("event", e);
    console.log("event target", e.target);
    console.log("from clickHandler", title);
  };

  const complexExample = (author: string) =>
    void console.log("from complexExample", author);

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log("Mouseover event", title);
      }}
    >
      <img src={img} alt="" width="50%" height="50%" />
      <h1
        onClick={() => {
          console.log("Hello h1!");
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <h6>{p}</h6>
      <button type="button" onClick={clickHandler}>
        Ref Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex
      </button>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<BookList />);

import React from "react";
import { createRoot } from "react-dom/client";
import Message from "./Components/Message";
import Person from "./Components/Person";
import { books } from "./data/books";
import Book from "./Components/book";
import "./index.css";

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

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<BookList />);

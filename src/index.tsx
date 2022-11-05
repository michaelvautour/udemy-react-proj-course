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
    img: "https://m.media-amazon.com/images/I/51rW2153DLL._SL500_.jpg",
    title: "I love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://m.media-amazon.com/images/I/91GcaFy+4GL._AC_UL640_FMwebp_QL65_.jpg",
    title: "A Song of Ice & Fire",
    author: "George R. R. Martin",
  },
];

const names = ["john", "peter", "susan"];

const newNames = names.map((name) => {
  console.log("name Arr", name);
  return <h1>{name}</h1>;
});

console.log("newNames Arr", newNames);

type Props = {
  img: string;
  title: string;
  author: string;
  children?: React.ReactNode;
};

const BookList = () => {
  return (
    <section className="booklist">
      <>
        {newNames}
        <Person />
        <Message />
        This is a booklist
        <br />
        <Book img={""} title={""} author={""} />
      </>
    </section>
  );
};

const Book = ({ img, title, author }: Props) => {
  return (
    <article className="book">
      <img src={img} alt="" width="50%" height="50%" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<BookList />);

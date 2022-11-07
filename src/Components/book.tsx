import { BookProps } from "../types/bookprop";

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

export default Book;

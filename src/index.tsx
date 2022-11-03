import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Components/Message';
import Person from './Components/Person';

const BookList = () => {
  return (
    <section>
      <Person />
      <Message />
      This is a booklist
      <br />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return <article>This is a car</article>
}

ReactDOM.render(<BookList />, document.getElementById('root'));
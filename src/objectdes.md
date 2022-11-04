# EXAMPLES of Object DESTRUCTURING

## Add future examples of child destructuring

const Book = ({ img, title, author }: Props) => {
return (

<article className="book">
<img src={img} alt="" width="50%" height="50%" />
<h1>{title}</h1>
<h4>{author}</h4>
</article>
);
};

(about example as well)
One method that reduces adding props. extension into return
const Book = (props: any) => {
const { img, title, author } = props;
return (

<article className="book">
<img src={img} alt="" width="50%" height="50%" />
<h1>{title}</h1>
<h4>{author}</h4>
</article>
);
};

One method w\ props passed with props reference
const Book = (props: any) => {
return (

<article className="book">
<img src={props.img} alt="" width="50%" height="50%" />
<h1>{props.title}</h1>
<h4>{props.author}</h4>
</article>
);
};

## CHILD Destructuring

### Note the children type, in addition i made children option so not required by all props

type Props = {
img: string;
title: string;
author: string;
children?: JSX.Element;
};

const BookList = () => {
return (

<section className="booklist">
<Person />
<Message />
This is a booklist
<br />

## To add children elements you need to have open/close tags for your props object and contain the child right after the initial component open tag part as seen with p below

<Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >

<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iusto
sapiente laboriosam beatae, fugiat quod est illo dolore asperiores
odio?
</p>
</Book>
<Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
</section>
);
};

## One way to destructure

const Book = ({ img, title, author, children }: Props) => {
return (

<article className="book">
<img src={img} alt="" width="50%" height="50%" />
<h1>{title}</h1>
<h4>{author}</h4>
{children}
</article>
);
};

## ALTERNATE way

const Book = (props): Props => {
const { img, title, author, children } = props;
return (

<article className="book">
<img src={img} alt="" width="50%" height="50%" />
<h1>{title}</h1>
<h4>{author}</h4>
{children}
</article>
);
};

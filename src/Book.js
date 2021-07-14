import React from 'react';

const Book = ({img, title, author}) => {
    //attribute, eventHandler
    //onClick, onMouseOver

    const clickHandler = () => {
        alert("Hello World")
    }

    const complexExample = (author)=>{

        console.log(author)

    }
    return (
        <article className={"book"} onMouseOver={()=>console.log(title)}>
            <Image image={img}/>
            <Title title={title}/>
            <Author author={author}/>
            <button type={"button"} onClick={clickHandler}>Reference Example</button>
            <button type={"button"} onClick={()=>complexExample(author)}>more complex example</button>
        </article>
    );
};

const Image = (props) => <img
    src={props.image}
    alt="myBook"/>

const Title = (props) => <h1>{props.title}</h1>
const Author = ({author}) => <h4>{author.toUpperCase()}</h4>
export default Book;



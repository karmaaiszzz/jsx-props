import React from "react";
import "./App.css";

const App = () => {
  return <BookList />;
};

const BookList = () => {
  return (
    <>
      <Book
        bookName="If He Had Been With Me"
        authorName="Laura Nowlin"
        bookImage="https://m.media-amazon.com/images/I/61tdwW3Nm8L._AC_UF1000,1000_QL80_.jpg"
      />
      <Book
        bookName="Things We Never Got Over"
        authorName="Lucy Score"
        bookImage="https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/i/7/m/things-we-never-got-over-original-imagz77xsdtvruyk.jpeg?q=20"
      />
      <Book
        bookName="The Nightingale"
        authorName="Kristin Hannah"
        bookImage="https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_UF1000,1000_QL80_.jpg"
      />
    </>
  );
};

const Book = (props) => {
  console.log(props);
  // const bookName = "If He Had Been With Me";
  return (
    <React.Fragment>
      <img
        style={{ objectFit: "contain" }}
        width={200}
        height={200}
        src={props.bookImage}
        alt={props.bookName}
      />
      <h4 className="book-name">{props.bookName}</h4>
      <h5>{props.authorName}</h5>
    </React.Fragment>
  );
};

export default App;

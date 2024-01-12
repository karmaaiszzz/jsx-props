import React from "react";
import Book from "./Books";

const book1 = {
  bookName: "If He Had Been With Me",
  authorName: "Laura Nowlin",
  bookImage:
    "https://m.media-amazon.com/images/I/61tdwW3Nm8L._AC_UF1000,1000_QL80_.jpg",
};

const book2 = {
  bookName: "Things We Never Got Over",
  authorName: "Lucy Score",
  bookImage:
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/regionalbooks/i/7/m/things-we-never-got-over-original-imagz77xsdtvruyk.jpeg?q=20",
};

const book3 = {
  bookName: "The Nightingale",
  authorName: "Kristin Hannah",
  bookImage:
    "https://m.media-amazon.com/images/I/81OkWjcf4WL._AC_UF1000,1000_QL80_.jpg",
};
const BookList = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Book bookDetails={book1} />
      <Book bookDetails={book2} />
      <Book bookDetails={book3} />
    </div>
  );
};

export default BookList;

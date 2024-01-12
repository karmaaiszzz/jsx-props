import React from "react";
import "./App.css";
import BookList from "./components/BookList.jsx";

const App = () => {
  return <BookList />;
};

// const Book = (props) => {
//   console.log(props);
//   // const bookName = "If He Had Been With Me";
//   return (
//     <React.Fragment>
//       <img
//         style={{ objectFit: "contain" }}
//         width={200}
//         height={200}
//         src={props.bookImage}
//         alt={props.bookName}
//       />
//       <h4 className="book-name">{props.bookName}</h4>
//       <h5>{props.authorName}</h5>
//     </React.Fragment>
//   );
// };

export default App;

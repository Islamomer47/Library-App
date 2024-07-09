import React from "react";
import "./BookCard.css";

const BookCard = ({ title, author, isbn }) => {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{isbn}</p>
    </div>
  );
};

export default BookCard;

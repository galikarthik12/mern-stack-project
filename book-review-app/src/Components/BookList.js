import React from "react";
import Review from "./Review";

const BookList = ({ books, addReview }) => {
    return (
        <div>
            {books.map((book) => (
                <div className="book-card" key={book.id}>
                    <div className="book-title">{book.title}</div>
                    <div>Author: {book.author}</div>
                    <Review book={book} addReview={addReview} />
                </div>
            ))}
        </div>
    );
};

export default BookList;

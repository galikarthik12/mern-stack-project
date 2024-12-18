import React, { useState } from "react";

const Review = ({ book, addReview }) => {
    const [reviewText, setReviewText] = useState("");

    const handleAddReview = () => {
        if (reviewText.trim()) {
            addReview(book.id, reviewText);
            setReviewText(""); // Clear the input field
        }
    };

    return (
        <div className="review-section">
            <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Type your review here! Atleast 10 words..."
            ></textarea>
            <button onClick={handleAddReview}>Submit</button>
            <div><br/>
                <strong>Reviews:</strong>
                <ul>
                    {book.reviews.map((review, index) => (
                        <li key={index}>{review}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Review;

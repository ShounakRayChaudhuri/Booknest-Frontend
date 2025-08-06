import React from "react";

const reviews = [
  {
    name: "Ananya D.",
    feedback: "BookNest is an absolute gem! I found a textbook that wasn’t available anywhere else. The interface is clean and easy to use.",
    rating: 5,
  },
  {
    name: "Rohan M.",
    feedback: "Love the Course section — finally a place where I can find curated premium content beyond free stuff.",
    rating: 4,
  },
  {
    name: "Samarjit P.",
    feedback: "The search and dark mode feature make using the site a breeze. Looking forward to more books being added!",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <div className="max-w-4xl mx-auto pt-24 px-4 dark:bg-slate-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">User Reviews</h1>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="mb-6 border-l-4 pl-4 border-indigo-500 bg-white dark:bg-slate-800 rounded-md shadow-sm py-4 px-4"
        >
          <p className="text-lg mb-2">“{review.feedback}”</p>
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>- {review.name}</span>
            <span>
              {Array(review.rating)
                .fill("⭐")
                .join("")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

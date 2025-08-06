// src/components/SearchResults.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Cards from "./Cards";

const SearchResults = () => {
  const { category } = useParams(); // URL param like /search/Game
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authUser] = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4002/book");
        const allBooks = res.data;

        // Debug: log all book categories
        console.log("All Categories:", allBooks.map(b => b.category));

        const normalizedSearch = category.trim().toLowerCase();

        const matchedBooks = allBooks.filter(
          (book) =>
            book.category &&
            book.category.trim().toLowerCase() === normalizedSearch
        );

        setFilteredBooks(matchedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    if (authUser) {
      fetchBooks();
    } else {
      setLoading(false);
    }
  }, [category, authUser]);

  if (!authUser) {
    return (
      <div className="text-center text-red-600 py-10 text-lg font-semibold">
        Please log in to search books by category.
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-10 text-lg">Loading...</div>;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for:{" "}
        <span className="text-indigo-600 capitalize">{category}</span>
      </h1>

      {filteredBooks.length === 0 ? (
        <p className="text-red-500 text-lg font-semibold">
          No books found under category <span className="italic">{category}</span>.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <Cards key={book._id} item={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;



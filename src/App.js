import React from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { useState } from 'react';

export default function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 999), title },
    ];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const filteredBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(filteredBooks);
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <>
      <div className='app'>
        <h1> Reading list</h1>
        <BookList
          books={books}
          onDelete={deleteBookById}
          onEdit={editBookById}
        />
        <BookCreate onCreate={createBook} />
      </div>
    </>
  );
}

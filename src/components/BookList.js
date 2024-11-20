import React from 'react';
import BookShow from './BookShow';

export default function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  console.log(renderedBooks);
  return <div className='book-list'>{renderedBooks}</div>;
}

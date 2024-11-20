import React from 'react';
import { useState } from 'react';

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };
  return (
    <>
      <div className='book-create'>
        <form onSubmit={handleSubmit}>
          <label htmlFor=''>Title</label>
          <input
            className='input'
            type='text'
            onChange={handleChange}
            value={title}
          />
          <button className='button'>Save</button>
        </form>
      </div>
    </>
  );
}

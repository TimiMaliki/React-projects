import React ,  { useState }  from 'react'
import { v4 as uuidv4 } from 'uuid';

const NotesList = () => {
  const [book, setBooks] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  const addSong = () => {
  setBooks([...book, {title: 'new book', id:uuidv4()}])
  }

  return (
    <div className="book-list">
    <ul>
     {book.map(book => (
      <li key ={book.id}>{book.title}</li>
     ))}
    </ul>
    <button onClick={addSong}>Add  a book</button>
  </div>
  )
}

export default NotesList
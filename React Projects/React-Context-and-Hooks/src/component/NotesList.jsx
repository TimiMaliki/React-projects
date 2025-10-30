import React ,  { useState }  from 'react'
import { v4 as uuidv4 } from 'uuid';
import NoteForm from './NoteForm';

const NotesList = () => {
  const [book, setBooks] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  const addSong = (title) => {
  setBooks([...book, {title, id:uuidv4()}])
  }

  return (
    <div className="book-list">
    <ul>
     {book.map(book => (
      <li key ={book.id}>{book.title}</li>
     ))}
    </ul>

    <NoteForm addSong={addSong}/>
  </div>
  )
}

export default NotesList
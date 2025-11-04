import React ,  { useContext, useState }  from 'react'
import { v4 as uuidv4 } from 'uuid';
import NoteForm from './NoteForm';
import { ThemeContext } from '../Context/ThemeContext';

const NotesList = () => {
  const [book, setBooks] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  const addSong = (title) => {
  setBooks([...book, {title, id:uuidv4()}])
  }

  const { isLight ,light , dark} = useContext(ThemeContext)
  const themeToggle = isLight ? light : dark

  return (
    <div className="book-list">
    <ul style={{ color: themeToggle.hex, background: themeToggle.bg }}>
     {book.map(book => (
      <li  style={{ background: themeToggle.ui }} key ={book.id}>{book.title}</li>
     ))}
    </ul>

    <NoteForm addSong={addSong}/>
  </div>
  )
}

export default NotesList


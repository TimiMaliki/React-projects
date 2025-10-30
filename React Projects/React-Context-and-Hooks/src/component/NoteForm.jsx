import  { useState }  from 'react'

const NoteForm = ({addSong}) => {
    const [title, setTitle] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
       console.log(title)
       addSong(title)
       setTitle('')
    }
  return (
  <form onSubmit={handleSubmit}>
    <label>Note Title</label>
    <input type="text" value={title}  required onChange={(e) => setTitle(e.target.value)} />
    <input type="submit" value="Add Note" />
  </form>
  )
}

export default NoteForm



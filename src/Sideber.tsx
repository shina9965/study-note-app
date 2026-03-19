import "./App.css"
import type {NotesDataProps} from "./App"

function Sideber({notesData, setNotesData}: NotesDataProps){

  const addNoteData = () => {
    
  }

  return(
    <div className="sideber">
      <button className="btn" onClick={addNoteData}>+</button>
    </div>
  )
}

export default Sideber
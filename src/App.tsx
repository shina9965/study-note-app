import "./App.css"
import Sideber from "./Sideber"
import { useState } from "react"

type NoteData = {
  id:number;
  title:string;
  text:string;
}

export type NotesDataProps = {
  notesData: NoteData[]
  setNotesData: React.Dispatch<React.SetStateAction<NoteData[]>> 
}

function App(){

  const [notesData, SetNotesData] = useState<NoteData[]>([])

  return(
    <div className="app">
      <Sideber notesData={notesData} setNotesData={SetNotesData}/>
      <div className="editor-body">

      </div>
    </div>
  )
}

export default App
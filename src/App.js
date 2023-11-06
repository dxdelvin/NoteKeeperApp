import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header'
import Note from './Components/Note'
import Footer from './Components/Footer'
import notes from './notes.js'
import InputArea from './Components/InputArea';


function App() {

  const [notes, setNotes] = useState([])
  
  function addnote(note){
    setNotes(p=>{
      return [...p, note]
    })
  }

  function deletenote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return id !== index;
      });
    });
  }
  

  return (
    <div>
      <Header />
      <div className={'noter_flexbox'}>
        <InputArea addnote={addnote} />
        {notes.map((item, index)=>{
          return <Note id={index} key={index} title={item.title} note={item.content} deletenote={deletenote} />
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;

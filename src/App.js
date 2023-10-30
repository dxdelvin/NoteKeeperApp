import React from 'react';
import './App.css';
import Header from './Components/Header'
import Note from './Components/Note'
import Footer from './Components/Footer'
import notes from './notes.js'

function noteAdd(n){
  return (
    <Note 
      key= {n.id}
      title = {n.title}
      note={n.content}
    />
  )
}

function App() {
  return (
    <div>
      <Header />
      <div className={'noter_flexbox'}>
        {notes.map(noteAdd)}
      </div>
      <Footer />
    </div>
  );
}

export default App;

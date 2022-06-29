import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const NoteContext = React.createContext();

export const NoteConsumer = NoteContext.Consumer;

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllNotes = (catId) => {
    axios.get(`/api/cats/${catId}/notes`)
      .then( res => setNotes(res.data))
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  return (
    <NoteContext.Provider value={{
      notes, 
      errors, 
      setErrors,
      getAllNotes,

    }}>
      { children }
    </NoteContext.Provider>
  )
}

export default NoteProvider;
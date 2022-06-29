import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CatContext = React.createContext() 

export const CatConsumer = CatContext.Consumer;

const CatProvider = ({ children }) => {
  const [cats, setCats] = useState([])
  const [errors, setErrors] = useState(null)

  const navigate = useNavigate()

  const getAllCats = () => {
    axios.get('/api/cats')
      .then( res => setCats(res.data) )
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  const addCat = (cat) => {
    axios.post('/api/cats', { cat })
      .then( res => setCats([...cats, res.data ]))
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  const updateCat = (id, cat) => {
    axios.put(`/api/cats/${id}`, { cat })
      .then( res => {
        const newUpdateCats = cats.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setCats(newUpdateCats)
        navigate('/cats')
      })
      .catch( err => {
        console.log(err)
        let field = Object.keys(err.response.data.errors)[0]
        let errMsg = Object.values(err.response.data.errors)[0]
        setErrors({
          variant: 'danger',
          msg: `${field} ${errMsg}`
        })
      })
  }

  const deleteCat = (id) => {
    axios.delete(`/api/cats/${id}`)
      .then( res => {
        setCats(cats.filter( c => c.id !== id ))
        navigate('/cats')
      })
      .catch( err => {
        console.log(err)
        setErrors({
          variant: 'danger',
          msg: err.response.statusText
        })
      })
  }

  return (
    <CatContext.Provider value={{
      cats, 
      errors, 
      setErrors,
      getAllCats,
      addCat,
      updateCat,
      deleteCat,
    }}>
      { children }
    </CatContext.Provider>
  )
}

export default CatProvider;
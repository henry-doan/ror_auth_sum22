import { useEffect, useState } from 'react';
import CatList from './CatList';
import { CatConsumer } from '../../providers/CatProvider';
import CatForm from './CatForm';
import { Modal } from 'react-bootstrap';

const Cats = ({ cats, getAllCats, errors, setErrors, addCat }) => {
  const [adding, setAdd] = useState(false)

  useEffect( () => {
    getAllCats()
  }, [])

  return (
    <>
      <p onClick={() => setAdd(true)}>+</p>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CatForm 
            addCat={addCat} 
            errors={errors} 
            setErrors={setErrors} 
          />
        </Modal.Body>
      </Modal>
      <CatList 
        cats={cats}
        errors={errors} 
        setErrors={setErrors} 
      />
    </>
  )
}

const ConnectedCats = (props) => (
  <CatConsumer>
    { value => <Cats {...props} {...value} />}
  </CatConsumer>
)

export default ConnectedCats;
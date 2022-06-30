import NoteList from './NoteList';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import NoteForm from './NoteForm';

const Notes = () => {
  const [adding, setAdd] = useState(false)

  return (
    <>
      <p onClick={() => setAdd(true)}>+</p>
      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <NoteForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <NoteList />
    </>
  )
}

export default Notes;
import { useState } from "react";
import { Button, ListGroup, Modal } from "react-bootstrap";
import Moment from 'react-moment';
import NoteForm from './NoteForm';

const Note = ({ catId, id, subject, body, ndate, ntime, deleteNote }) => {
  const [show, setShow] = useState(false);
  const [editing, setEdit] = useState(false); 

  return (
    <>
      <ListGroup.Item>
        Subject: {subject}  Body:{body} 
        <Button onClick={() => setShow(true)}>
          Show
        </Button>
      </ListGroup.Item>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Note Show</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Date: 
            <Moment format="MM-DD-YYYY">
              {ndate}
            </Moment>
          </p>
          <p>
            Time: 
            <Moment format="hh:mm">
              {ntime}
            </Moment>
          </p>
          <p>Subject: {subject}</p>
          <p>Note: {body}</p>
          <Button onClick={() => setEdit(true)}>Edit</Button>
          <Modal show={editing} onHide={() => setEdit(false)}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
              <NoteForm 
                id={id}
                ndate={ndate}
                ntime={ntime}
                subject={subject}
                body={body}
                setEdit={setEdit}
              />
            </Modal.Body>
          </Modal>

          <Button onClick={() => deleteNote(catId, id)}>
            Delete
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Note;
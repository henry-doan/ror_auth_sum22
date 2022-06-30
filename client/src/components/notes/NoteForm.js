import { NoteConsumer } from "../../providers/NoteProvider";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import Flash from '../shared/Flash';

const NoteForm = ({ addNote, setAdd, id, subject, body, ndate, ntime, setEdit, updateNote, errors, setErrors }) => {
  const { catId } = useParams()
  const [note, setNote] = useState({ subject: '', body: '', ndate: '', ntime: '' })

  useEffect( () => {
    if (id) {
      setNote({ subject, body, ndate, ntime})
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateNote(catId, id, note)
      setEdit(false)
    } else {
      addNote(catId, note)
      setAdd(false)
    }
    setNote({ subject: '', body: '', ndate: '', ntime: '' })
  }

  return (
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
      <h1>{ id ? "Update" : "Create" } Note</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control 
            type="date" 
            name='ndate'
            value={note.ndate}
            onChange={(e) => setNote({ ...note, ndate: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control 
            type="time" 
            name='ntime'
            value={note.ntime}
            onChange={(e) => setNote({ ...note, ntime: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Subject</Form.Label>
          <Form.Select
            name='subject'
            value={note.subject}
            onChange={(e) => setNote({ ...note, subject: e.target.value })}
            required
          >
            <option>Open this select menu</option>
            <option value="Health">Health</option>
            <option value="Diet">Diet</option>
            <option value="Play">Play</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Note</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3}
            name='body'
            value={note.body}
            onChange={(e) => setNote({ ...note, body: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

const ConnectedNoteForm = (props) => (
  <NoteConsumer>
    { value => <NoteForm {...props} {...value} /> }
  </NoteConsumer>
)

export default ConnectedNoteForm;
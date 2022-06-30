import { NoteConsumer } from "../../providers/NoteProvider";
import Note from './Note';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import Flash from "../shared/Flash";

const NoteList = ({ notes, getAllNotes, deleteNote, errors, setErrors }) => {
  const { catId } = useParams()

  useEffect( () => {
    getAllNotes(catId)
  }, [])

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
      <h1>All Notes</h1>
      <ListGroup variant="flush">
        { notes.map(n => 
            <Note 
              key={n.id}
              {...n}
              catId={catId}
              deleteNote={deleteNote}
            />
        )}
      </ListGroup>
    </>
  )
}

const ConnectedNoteList = (props) => (
  <NoteConsumer>
    { value => <NoteList {...props} {...value} />}
  </NoteConsumer>
)

export default ConnectedNoteList;
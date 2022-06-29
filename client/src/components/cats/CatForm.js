import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Flash from '../shared/Flash';
import { useParams, useLocation } from 'react-router-dom';
import { CatConsumer } from '../../providers/CatProvider';

const CatForm = ({ addCat, errors, setErrors, updateCat }) => {
  const [cat, setCat] = useState({ name: '', breed: '', registry: '', avatar: '' })
  
  const { id } = useParams()
  const location = useLocation()
  const { name, breed, registry, avatar } = location.state

  useEffect( () => {
    if (id) {
      setCat({ name, breed, registry, avatar })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateCat(id, cat)
    } else {
      addCat(cat)
    }
    setCat({ name: '', breed: '', registry: '', avatar: '' })
  }

  return(
    <>
      { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
      <h1 className='text-center'>
        { id ? 'Update' : 'Create'} Cat
      </h1>
      <Form onSubmit={handleSubmit}>
        <Container>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Cat Name</Form.Label>
                <Form.Control
                  name='name'
                  value={cat.name}
                  onChange={(e) => setCat({ ...cat, name: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Registry</Form.Label>
                <Form.Control
                  name='registry'
                  value={cat.registry}
                  onChange={(e) => setCat({ ...cat, registry: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  name='breed'
                  value={cat.breed}
                  onChange={(e) => setCat({ ...cat, breed: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Avatar Image</Form.Label>
                <Form.Control
                  name='avatar'
                  value={cat.avatar}
                  onChange={(e) => setCat({ ...cat, avatar: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Container>
      </Form>
    </>
  )
}

const ConnectedCatForm = (props) => (
  <CatConsumer>
    { value => <CatForm {...props} {...value} /> }
  </CatConsumer>
)

export default ConnectedCatForm;
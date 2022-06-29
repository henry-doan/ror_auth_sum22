import { useState } from 'react';
import { Container, Row, Col, Card, Modal, Button, Image } from 'react-bootstrap';
import { CatConsumer } from '../../providers/CatProvider';
import { Link } from 'react-router-dom';

const Cat = ({ id, name, avatar, breed, registry, deleteCat }) => {
  const [show, setShow] = useState(false)

  return (
    <Col>
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src={avatar} style={{ height: '150px'}} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button variant="primary" onClick={() => setShow(true)}>Show</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <h1>{name}</h1>
                <h4>Breed: {breed}</h4>
                <p>Registry: {registry}</p>
                <Link 
                  to={`/${id}/updateCat`}
                  state={{
                    id, 
                    name,
                    breed,
                    avatar,
                    registry,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button
                  onClick={() => deleteCat(78)}
                >
                  Delete
                </Button>
              </Col>
              <Col>
                <Image src={avatar} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </Col>
  )
}

const ConnectedCat = (props) => (
  <CatConsumer>
    { value => <Cat {...props} {...value} />}
  </CatConsumer>
)

export default ConnectedCat;
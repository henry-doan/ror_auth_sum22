import { Container, Row } from 'react-bootstrap';
import Cat from './Cat.js';
import Flash from '../shared/Flash';

const CatList = ({ cats, errors, setErrors }) => (
  <Container>
    { errors ?
        <Flash 
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
        : null
      }
    <h1>My Cats</h1>
    <Row lg={4}>
      { cats.map( c => 
        <Cat key={c.id} {...c} />
      )}
    </Row>
  </Container>
)

export default CatList;
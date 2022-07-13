import { Link } from 'react-router-dom';
import CatHeader from '../../images/catHeader.jpg';
import Cat from '../../images/cat.png';
import { Row, Col, Container, Accordion, Button } from 'react-bootstrap';
import { Fade, Slide } from 'react-awesome-reveal';

const Home = () => (
  <>
    <img src={CatHeader} width='100%' alt='cat header' />
    <Container>
      <br />
      <br />
      <Row>
        <Col md={6} sm={12}>
          <Fade direction="left" triggerOnce>
            <h3>Enjoy a Catpuccino in a Purrfect Catmosphere</h3>
          </Fade>
        </Col>
        <Col md={6} sm={12}>
          <Fade direction='right' triggerOnce>
            <p>Have purrsuasive experience with purrty darn cute kittys in the biggest meowment of the century.</p>
            <Link to='/register'>
              <Button>
                Sign Up
              </Button>
            </Link>
            <Link to='/login'>
              <Button>
                Login
              </Button>
            </Link>
          </Fade>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col md={6} sm={12}>
          <Slide direction='left'>
            <img src={Cat} width='50%' alt='cat' />
          </Slide>
        </Col>
        <Col md={6} sm={12}>
          <Slide direction='right'>
            <h3>Check out Pawsome Cats while enjoying some Kit-teas</h3>
            <p>Meow Meow Meow Meow Meow!</p>
          </Slide>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Fade>
        <h3 className='text-center'>FAQ</h3>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What kind of cats are there?</Accordion.Header>
            <Accordion.Body>
              There are all sorts of cats with different names, breeds and sizes.
              You can also bring in your cat as well and import them to our wide
              data selection.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is it legal to have this many cats?</Accordion.Header>
            <Accordion.Body>
              All the cats will have to have a registry to be added into our site. Then
              One everything with all of the fields filled out, that would be all the info
              we need to verify our furry friends.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where did the mascot come from?</Accordion.Header>
            <Accordion.Body>
              Our mascot comes from a long line of strays that we now have put as a 
              heel into our marketing side. She is well groomed and mannered, and loves 
              all kinds of milk.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Fade>
      <br />
      <br />
    </Container>
  </>
)

export default Home;
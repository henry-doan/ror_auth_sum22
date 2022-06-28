import { Link } from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';

const Navbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {
    // links to show up if the user is logged in
    if (user) {
      return (
        <>
          <li onClick={() => handleLogout() }>
            Logout
          </li>
        </>
      )
    } else {
      // links to show up when they are not logged in
      return (
        <>
          <Link to='/login'>
            <li>
              Login
            </li>
          </Link>
          <Link to='/register'>
            <li>
              Register
            </li>
          </Link>
        </>
      )
    }
  }

  return (
    <>
      <nav>
        <ul>
          {/* this will display regardless if you are logged in or not */}
          <Link to='/'>
            <li>Home</li>
          </Link>
          { rightNavItems() }
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <Navbar {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedNavbar;
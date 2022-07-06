import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Nomatch from './components/shared/Nomatch';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Cats from './components/cats/Cats';
import CatForm from './components/cats/CatForm';
import Notes from './components/notes/Notes';
import Profile from './components/auth/Profile';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/cats' element={<Cats />} />
          <Route path='/:id/updateCat' element={<CatForm />} />
          <Route path='/:catId/notes' element={<Notes />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Nomatch />} />
      </Routes>
    </FetchUser>
  </>
)

export default App;

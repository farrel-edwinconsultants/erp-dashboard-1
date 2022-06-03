import Logo from '../../../assets/BMA Logo.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import jsCookie from 'js-cookie';

const Navbar = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    const token = jsCookie.get('auth')
    jsCookie.remove('auth')
    axios.get('http://localhost:8000/api/logout', {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(() => {
        navigate('/')
      });
  }

    return (
        <>
          <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container">
              <div className="navbar-brand ps-5">
                <img className="logo" src={Logo} alt="" width="30" height="24" />
              </div>
            </div>
            <div className="d-flex pe-4">  
              <button className="btn btn-outline-danger m-1" onClickCapture={handleLogout} type="submit">Logout</button>
            </div>
          </nav>
        </>
    )
}

export default Navbar
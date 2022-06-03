import Logo from '../../../assets/BMA Logo.jpeg'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  
  const handleLogout = () => {
    const token = Cookies.get('laravel_session')
    console.log(token)
    axios.get('http://localhost:8000/api/logout', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(() => {
        navigate('/', {
          state: {
            isLoggedIn: false
          }
        })
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
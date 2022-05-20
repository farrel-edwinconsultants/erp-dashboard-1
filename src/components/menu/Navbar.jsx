import Logo from '../../assets/Logo.svg'

const Navbar = () => {
    return (
        <>
          <nav className="navbar navbar-dark bg-dark sticky-top">
            <div className="container">
              <div className="navbar-brand" href="#">
                <img className="logo" src={Logo} alt="" width="30" height="24" />
              </div>
            </div>
          </nav>
        </>
    )
}

export default Navbar
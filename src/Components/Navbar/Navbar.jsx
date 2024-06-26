import React, {useState} from 'react'
import './Navbar.css'
import { Link,NavLink, useNavigate } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';
import Hamburger from 'hamburger-react'
import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {
  const user = useSelector((state) => state.authReducer.authData);

    const [showModal, setShowModal] = useState(false);
    const [isOpen, setOpen] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleConfirmLogout = () => {
        dispatch({ type: "LOG_OUT" });
        navigate('/home');
        setShowModal(false);
  };
  console.log(user);

  return (
    <div className='navbar'>
      <div className="navbar-mobile">
        <div className='navbar-logo'>
             <Link style={{ textDecoration: 'none' }} to='/home' ><p>SpaceEd</p></Link>           
        </div>
        <div className="nav-hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
        <div className='navbar-content'>
        <ul className='navbar-menu'>
        <li>
          <NavLink  exact to="/" activeClassName="active">
            Explore Classes
          </NavLink>
        </li>
        <li>
          <NavLink  to="/about" activeClassName="active">
            Teach on SpaceEd
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            About Us
          </NavLink>
        </li>
      </ul>
        <div className='navbar-button'>
        {user ?
          (
          <>
          <button className='navbar-login' onClick={() => setShowModal(true)}>
                Log out
            </button>
            <LogoutModal 
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirmLogout}
              />
            </>
          ) : (
            <button className='navbar-login'>
                <Link style={{ textDecoration: 'none', color: '#626262' }} to='/login'>Login</Link>
        </button>
            )}
        <button className='navbar-profile'>
          <Link to='/login'>
                <span className="icon-container">
                    <FaUser />
            </span>
          </Link>
            </button>
        </div>
        </div>
    </div>
  )
}
export default Navbar




const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
        <div style={{ height: 150, background: "#F5F3F8"}} className="modal-content">
                <h4>Confirm Logout</h4>
                <p>Are you sure you want to log out?</p>
                <button className='Button button-yes' onClick={onConfirm}>Yes</button>
                <button className='Button button-no' onClick={onClose}>No</button>
            </div>
        </div>
    );
};
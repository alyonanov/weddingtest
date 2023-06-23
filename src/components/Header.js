import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return(
    <div className="header">
        <div className='headerBlock'>
        {!isHomePage && (
        <button className='btn-back' onClick={() => navigate('/')}>Назад</button>
        )}
            <p>
                WELCOME!
            </p>
        </div>
    </div>
    )
    };
  export default Header;
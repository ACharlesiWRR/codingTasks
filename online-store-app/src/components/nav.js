import { Link , useNavigate } from 'react-router-dom'

const NavigationBar = ({isLoggedIn, onLogout , loggedInName, cartTotal}) => {
  
  // to handle passing the cartTotal between pages - move to totalPrice.js???????
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path, { state: { cartTotal } });
  };

  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/about" onClick={() => handleNavigation("/about")}>
          About
        </Link>
        <Link to="/products">Products</Link>
      </nav>
    </div>
  );
}

export default NavigationBar
import "./Nav.css"
import { Link } from 'react-router-dom';

const Nav = () => {

    return ( 
        <nav className="gc-header">
            <h3>GoCrayons Brandon</h3>
            <div className="primarymenu">
                <Link to="/" className="menulist">List</Link >
                <Link to="/add" className="menulist">Add List</Link >
                <Link to="/remove" className="menulist">Remove List</Link >
                <Link to="/edit" className="menulist">Edit List</Link >
            </div>
        </nav>
    );
}
 
export default Nav;
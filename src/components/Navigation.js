import {Link} from 'react-router-dom'
import ImageComponent from '../ImageComponent';
import myimage from '../img/logooriginal.png';

function Navigation()
{
    return(
        <div className="navbar">
            
            <ImageComponent id="logo" url={myimage} />
            <h4 id="compname"> N.S. Safe Water </h4>
           
            <Link style={{ textDecoration: 'none' }} className="navlink" to="/">Home</Link>
            <Link style={{ textDecoration: 'none' }} className="navlink" to="/about">About</Link>
            <Link style={{ textDecoration: 'none' }} className="navlink" to="/Service">Service</Link>
            <Link style={{ textDecoration: 'none' }} className="navlink" to="/Contact">Contact</Link>
            <Link style={{ textDecoration: 'none' }} className="navlink" to="/admin">Admin Dashboard</Link>
        </div>
    )
}

export default Navigation
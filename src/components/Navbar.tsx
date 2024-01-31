import "../styles/Navbar.css"
import logoSmall from '/logo-image.png';

function Navbar()
{
    return(
        <div className="navbar">
            <img className="navbar-logo-img" src={logoSmall}/>
            <h1 className="navbar-logo">HealthCare</h1>
            <div className="navlinks-container">
                <b className="navbar-item">Home</b>
                <p className="navbar-item">Find a doctor</p>
                <p className="navbar-item">Apps</p>
                <p className="navbar-item">Testimonials</p>
                <p className="navbar-item">About us</p>
            </div>
        </div>
    );
}

export default Navbar;
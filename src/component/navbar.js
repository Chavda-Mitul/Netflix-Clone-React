import './navbar.css';
function Navbar()
{
    return (
        <>
        <div className="navbar">
            <div className="navigation-bar-outline">
            <div className="navigation-bar-logo">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo"/>
            </div>
            <div className="sigin-button">
                <button>sigin</button>
                <select name="cars" id="cars">
                <option value="volvo">English</option>
                <option value="saab">French</option>
                <option value="mercedes">Mexican</option>
                <option value="audi">Hindi</option>
                </select>
            </div>
            </div>
            </div>
        </>
    );
}

export default Navbar;
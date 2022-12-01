import './container.css';
import Navbar from './navbar';
function Container() {
  return (
    <div>
      <div className="main-container">
        <Navbar/>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/5d715e0d-a0c2-4bd3-8c99-a1e7e0ec6e2d/IN-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix-main" />
      </div>
    </div>
  );
}
export default Container;
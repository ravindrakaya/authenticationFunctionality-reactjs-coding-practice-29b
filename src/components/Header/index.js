// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="list-container">
      <Link to="/">
        <li className="list-item">Home</li>
      </Link>
      <Link to="/about">
        <li className="list-item">About</li>
      </Link>
    </ul>
  </div>
)
export default Header

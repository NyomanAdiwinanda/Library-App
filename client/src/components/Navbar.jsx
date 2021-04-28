import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2><Link to={'/'}>Home</Link></h2>
      <h2><Link to={'/favorites'}>My Favorites</Link></h2>
    </div>
  )
}

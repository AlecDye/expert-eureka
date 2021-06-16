import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <div className="title-container">
        <h1>Expert Eureka</h1>
        <small className="subtitle" >Super Micro-blog</small>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">New Blog</Link></li>
        </ul>
      </nav>
    </header>
  )

}

export default Navbar

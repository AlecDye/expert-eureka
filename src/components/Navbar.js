const Navbar = () => {
  return (
    <header className="header">
      <div className="title-container">
        <h1>Expert Eureka</h1>
        <small className="subtitle" >Super Micro-blog</small>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">New Blog</a></li>
        </ul>
      </nav>
    </header>
  )

}

export default Navbar

const Navbar = () => {
  return <header>
    <div className="container header-container">
      <h1>Where in the world?</h1>
      <button className="btn" id="mode-btn">
        <i className="fa-regular fa-moon"></i>
        <span>Dark Mode</span>
      </button>
    </div>
  </header>
}

export default Navbar
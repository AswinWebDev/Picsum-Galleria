const Navbar = ({ setCount }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  return (
    <div>
      <nav className="navbar fixed-top bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand">Picsum Galleria</a>
          <form className="d-flex" role="search">
            <input
              //   value={count}
              onChange={handleChange}
              className="form-control me-2"
              type="number"
              placeholder="Image Count"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
